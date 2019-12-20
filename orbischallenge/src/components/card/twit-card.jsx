import React from 'react';
import './card.styles.css'

export const Twit = (props) => (
    <div className="card-container"> 
    
        <img alt="monster" src={props.twit.user.avatar_url}/>
    <div className="card-header">
        <h1 className="card-username">{ props.twit.user.username }</h1>
        <h1 className="card-username">Symbol: { props.twit.symbols[0].symbol }</h1>
    </div>
        <p>{ props.twit.body }</p>
    
        {console.log("Props", props)}
    </div>
);
