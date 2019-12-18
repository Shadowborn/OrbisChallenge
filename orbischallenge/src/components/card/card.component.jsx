import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className="card-container"> 
        <img alt="monster" src={`https://api.stocktwits.com/api/2/streams/trending.json`}/>
        <h1>{ props.monster.messages }</h1>
        <p>{ props.monster.body }</p>
    </div>
);
