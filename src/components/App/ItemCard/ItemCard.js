import React from 'react';
import './ItemCard.css';

const ItemCard = (props) => {
    console.log('ic',props);
    return (
        <div className="item-card">
            <div className="item-card__title">{props.title}<small>{props.subtitle}</small></div>
            <props.component {...props}/>
        </div>
    )
}

export default ItemCard;
