import React from 'react';
import airbnb from '../images/airbnb.svg';
export default function Navbar() {
    return (
        <nav>
            <div className='nav--logo-container'>
            <img className='nav--img' src={airbnb}></img>
            <span className='nav--text'>airbnb</span>
            </div>
        </nav>
    );
}