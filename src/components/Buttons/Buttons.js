import React from 'react';
import './Buttons.css';

const Buttons = (props) => {
    return (
        <div>
            <h3 className="section__title">Animated Buttons</h3>
            <button type="button" name="button" className="chevron-button">Chevron Button</button>
            <h3 className="section__title">Expanding Button</h3>
            <ul className="expanding-button__list">
                <li className="expanding-button__item"><span><i className="fas fa-trash"></i></span> Test</li>
            </ul>
        </div>
    )
}

export default Buttons;