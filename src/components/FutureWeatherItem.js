import React from 'react'

const FurtureWeatherItem = (args) => {
    const { weekday, icon, temp, weather } = args
    return (
        <>
            <h2>{weekday}</h2>
            <p>{icon}</p>
            <p>{temp}</p>
            <p><small>{weather}</small></p>
        </>
    )
}
export default FurtureWeatherItem;