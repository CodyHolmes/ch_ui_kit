import React from 'react';
import './ItemCard.css';

const ItemCard = (props) => {
    const showGithubLink = () => {
        if(props.githubLink){
            return <a href={props.githubLink} rel="noopener noreferrer" target="_blank" className="item-card__source">Source Code<i className="fab fa-github item-card__github"></i></a>;
        }
    }
    return (
        <div className="item-card">
            <div className="item-card__title">{props.title}<small>{props.subtitle}</small></div>
            <div className="item-card__contents">
                <props.component {...props}/>
            </div>
            {showGithubLink()}
        </div>
    )
}

export default ItemCard;
