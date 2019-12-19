import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className="card-container"> 
        {/* <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/> */}
        <img alt="monster" src={`https://picsum.photos/id/${props.monster.id}/200/300`}/>
        <h1>{ props.monster.title }</h1>
        <p>{ props.monster.body }</p>
        {/* {console.log("Props", props)} */}
    </div>
);
