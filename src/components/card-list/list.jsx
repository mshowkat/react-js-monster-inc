import './list.css';
import React from 'react';

import {Card} from '../card/card.jsx'


export const CardList = props => {
    return (
        <div className = 'card-list'>
            {
                props.monsters.map((monster) => (
                <Card key={monster.id} monster={monster}/>
            ))
            }
        </div>
    );
}