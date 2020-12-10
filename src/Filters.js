import React from 'react'
import './Filters.css'
import { modes, amenities } from './constants.js'

export default function Filters({ filterAmenities, filterModes }) {

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
                            </div>
                        </label>
                    ))}
                </div>
            </nav>

        </div>
    )
}
