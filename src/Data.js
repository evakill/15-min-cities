import React from 'react'
import Papa from 'papaparse'
import { useState, useEffect } from 'react'
import { modes, amenities } from './constants.js'
import dataCSV from './data-csv.js'
import './Data.css'

export default function Data ({ name, _amenities, _modes }) {
    const allData = Papa.parse(dataCSV, { header: true }).data
    const [data, setData] = useState(allData.find(d => d.name == name))
    const [results, setResults] = useState([])

    useEffect(() => {
        if (!data) return
        const r = []

        let numGroceries = 0
        let groceryColor
        amenities.forEach(place => {
            place.fields.forEach(name => {
                let dataStr = name
                if (_modes.length === 0 || _modes.length === 3) {
                    dataStr = 'total_' + name
                } else {
                    _modes.forEach(m => dataStr += ('_' + m))
                }
                if (place.label === 'groceries') {
                    numGroceries += Number(data[dataStr])
                    groceryColor = place.color
                } else {
                    r.push({ number: data[dataStr], label: place.label, color: place.color, fields: place.fields })
                }
            })
        })
        r.unshift({ label: 'groceries', fields: ['supermarket', 'farmers_markets'], number: numGroceries, color: groceryColor })

        let totalStr = 'total'
        if (_modes.length === 0 || _modes.length === 3) {
            totalStr = 'total_amen'
        } else {
            _modes.forEach(m => totalStr += ('_' + m))
        }
        r.unshift({ label: 'total', fields: ['total'], number: data[totalStr], color: '#aaa' })

        setResults(r)
    }, [data, _modes])

    return (
        <div className="data-container">
            {results.map(r => {
                const numStyle = { backgroundColor: r.color }
                const textStyle = {}
                if (_amenities.length && !_amenities.includes(r.fields[0])) {
                    numStyle.opacity = 0.2
                    textStyle.opacity = 0.2
                }
                return (
                    <div key={r.label} className="data-item">
                        <div className="data-number" style={numStyle}>
                            {r.number}
                        </div>
                        <p style={textStyle} className="data-text"> {r.label} </p>
                    </div>
                )
            })}
        </div>
    )
}
