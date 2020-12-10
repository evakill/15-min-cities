import React, { useRef, useEffect, useState } from 'react'
import Filters from './Filters'
import mapboxgl from 'mapbox-gl'
import './Map.css'

mapboxgl.accessToken =
'pk.eyJ1IjoiZXZha2lsbGVuYmVyZyIsImEiOiJja2lmNmZiZTQyMDc2MnJudjgwYmdxaTE1In0.0bGSxHM22ycwhFjpYiEfOg'

const Map = ({ name, zoomLat, zoomLng }) => {
    const mapContainerRef = useRef(null)

    const [map, setMap] = useState()

    const [lng, setLng] = useState(zoomLng)
    const [lat, setLat] = useState(zoomLat)
    const [zoom, setZoom] = useState(12.5)

    const [amenities, setAmenities] = useState([])
    const [modes, setModes] = useState([])

    const all_amenities = ['supermarket', 'farmers_markets', 'restaurant', 'schools', 'medical', 'recreation & greenspace', 'retail', 'entertainment & culture']
    const all_modes = ['transit', 'pedestrian', 'bicycle']
    const layers = ['JH', 'JH-text', 'VK', 'VK-text', 'ZR', 'ZR-text', 'BW', 'BW-text', 'MY', 'MY-text', 'MJ', 'MJ-text', 'AT', 'AT-text']

    // Initialize map when component mounts
    useEffect(() => {
        const _map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/evakillenberg/cki7xqf7r4ywy19qnuuk493gg',
            center: [lng, lat],
            zoom: zoom
        })

        // Add navigation control (the +/- zoom buttons)
        _map.addControl(new mapboxgl.NavigationControl(), 'top-right')

        _map.on('move', () => {
            setLng(_map.getCenter().lng.toFixed(4))
            setLat(_map.getCenter().lat.toFixed(4))
            setZoom(_map.getZoom().toFixed(2))
        })

        _map.on('load', function() {
            layers.forEach(l => {
                if (l.indexOf(name) === -1) {
                    _map.setLayoutProperty(l, 'visibility', 'none')
                }
            })

            _map.setLayoutProperty('census-final', 'visibility', 'none')
            _map.setFilter(`residences`, ['==', name, ['get', 'name']])
            setMap(_map)
        })

        // Clean up on unmount
        return () => _map.remove()
    }, [])

    useEffect(() => {
        if (!map) return
        setFilter('category', amenities)
    }, [amenities])

    useEffect(() => {
        if (!map) return
        setFilter('mode', modes)
    }, [modes])

    function setFilter(field, list) {
        let filter = map.getFilter(`${name}`) || ['all']
        filter = filter.filter(expr => (
            !Array.isArray(expr) || expr.length < 1 || expr[1][1] !== field
        ))
        if (list.length) filter.push(['in', ['get', field], ['literal', list]])
        map.setFilter(`${name}`, filter)
        map.setFilter(`${name}-text`, filter)
    }

    function filterAmenities(fields, filter) {
        let new_amenities = []
        if (filter) {
            new_amenities = amenities.concat(fields)
        } else {
            new_amenities = amenities.filter(a => !fields.includes(a))
        }
        setAmenities(new_amenities)
    }

    function filterModes(fields, filter) {
        let new_modes = []
        if (filter) {
            new_modes = modes.concat(fields)
        } else {
            new_modes = modes.filter(a => !fields.includes(a))
        }
        setModes(new_modes)
    }


    return (
        <div className="map-section">
            { map && <Filters filterAmenities={filterAmenities} filterModes={filterModes}/>}
            <div className='map-container' ref={mapContainerRef} />
        </div>
    )
}

export default Map
