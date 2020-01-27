import React from 'react';
import Twitters from './Twitter';
import FutureWeather from './FutureWeather'

const CardBot = () => {
    return (
        <>
            <div className="bot__twitter">
                <Twitters/>
            </div>
            
            <div className="bot__bar">

            </div>

            <div className="bot__futureWeather">
                <FutureWeather/>
            </div>
        </>
    )
}

export default CardBot;