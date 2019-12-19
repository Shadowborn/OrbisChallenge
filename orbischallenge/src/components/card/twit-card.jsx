import React from 'react';
import './card.styles.css'

export const Twit = (props) => (
    <div className="card-container"> 
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        <p>{ props.twit.body }</p>
        {/* {console.log("Props", props)} */}
    </div>
);
