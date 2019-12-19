import React from 'react';
import './card.styles.css'

export const Twit = (props) => (
    <div className="card-container"> 
        <img alt="monster" src={props.twit.user.avatar_url}/>
        <h1 className="card-username">{ props.twit.user.username }</h1>
        <p>{ props.twit.body }</p>
        {console.log("Props", props)}
    </div>
);
