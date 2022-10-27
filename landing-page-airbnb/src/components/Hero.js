import React from "react";
import hero1 from '../images/hero1.jpg';
import hero2 from '../images/hero2.jpg';
import hero3 from '../images/hero3.jpg';
import hero4 from '../images/hero4.jpg';

export default function Hero() {
    return (
        <section className="hero--section-container">
            <div className="hero--images-container">
                <img className="hero--img" src={hero1} />
                <img className="hero--img" src={hero2}></img>
                <img className="hero--img" src={hero3}></img>
                <img className="hero--img" src={hero4}></img>
            </div>
            <h1 className="hero--title">Online experiences</h1>
            <p className='hero--text'>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </section>
    );
}