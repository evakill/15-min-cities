import React from 'react'
import './Filters.css'

export default function Filters({ filterAmenities, filterModes }) {
    const modes = [
        {
            fields: ['transit'],
            label: 'transit'
        }, {
            fields: ['pedestrian'],
            label: 'walking'
        }, {
            fields: ['bicycle'],
            label: 'biking'
        }
    ]
    const amenities = [
        {
            fields: ['supermarket', 'groceries'],
            label: 'groceries',
            color: '#3b9121'
        }, {
            fields: ['restaurant'],
            label: 'restaurants',
            color: '#e00000'
        }, {
            fields: ['schools'],
            label: 'schools',
            color: '#46b1e2'
        }, {
            fields: ['medical'],
            label: 'healthcare',
            color: '#e740da'
        }, {
            fields: ['recreation'],
            label: 'recreation & greenspace',
            color: '#8947e6'
        }, {
            fields: ['commercial'],
            label: 'retail',
            color: '#ffd95c'
        }, {
            fields: ['entertainment'],
            label: 'entertainment & culture',
            color: '#ff6600'
        }
    ]

    return (
        <div className="filter-container">
            <nav className="panel">
                <p className="panel-heading">
                    Filter
                </p>
                <div className="panel-body">
                    <p className="panel-label"> Transportation Modes </p>
                    { modes.map(({ fields, label }) => (
                        <label key={label} className="panel-block">
                            <input type="checkbox" onChange={(e) => filterModes(fields, e.target.checked)}/>
                            {label}
                        </label>
                    ))}
                    <p className="panel-label"> Amenities </p>
                    { amenities.map(({ fields, label, color }) => (
                        <label key={label} className="panel-block">
                            <input type="checkbox" onChange={(e) => filterAmenities(fields, e.target.checked)}/>
                            <div className="label-container">
                                <div>{label}</div>
                                <div className="color-icon" style={{ backgroundColor: color }}/>
                            </div>
                        </label>
                    ))}
                </div>
            </nav>

        </div>
    )
}
