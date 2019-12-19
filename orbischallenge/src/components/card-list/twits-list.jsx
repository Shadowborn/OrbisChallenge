import React from 'react';
import { Twit } from '../card/twit-card';
import './card-list.styles.css';



export const TwitList = (props) => (
    <div className="card-list"> 
        {props.twits.map(twit => (
            <Twit key={twit.id} twit={twit}/>
        ))}
    </div>
);