import React from 'react';
import './card.styles.css'

export const Twit = (props) => (
    <div className="card-container"> 
        <img alt="monster" src={props.twit.user.avatar_url}/>
        <p>{ props.twit.body }</p>
        {console.log("Props", props)}
    </div>
);
