import React from 'react';
import CardTop from './CardTop'
import CardBot from './CardBot'

const Card = () =>{

    return(
        <>
            <div className="top">
                <CardTop/>
            </div>
            
            <div className="bot">
             <CardBot/>
            </div>
        </>
    )
}

export default Card;