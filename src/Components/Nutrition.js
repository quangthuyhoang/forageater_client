import React from 'react';

const NutritionComponent = ( param, info, index) => {
    console.log("info",info)
    return (
        
        <li key={index} className="list-group-item list-group-item-action flex-column align-items-start soft-glow soft-glow-shadow bottom-spacing">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{param.toLowerCase()}</h5>
                <small>{info.total} {info.unit.toLowerCase()}</small>
            </div>
        </li>
    )
}

export default NutritionComponent;