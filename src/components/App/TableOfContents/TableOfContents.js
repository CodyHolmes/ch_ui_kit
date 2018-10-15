import React from 'react';
import { Link } from 'react-router-dom';
import './TableOfContents.css';

const TableOfContents = () => {
    return (
       <ul className="table-of-contents__list">
            <li><Link to='CodeBlock' className="table-of-contents__link">Code Block</Link></li>
            <li><Link to='Navbar' className="table-of-contents__link">Navigation Bar</Link></li>
        </ul>
    )
}

export default TableOfContents;