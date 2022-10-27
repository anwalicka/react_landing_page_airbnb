import React from "react";
import hero5 from '../images/hero5.jpg';
import starSolid from '../images/star-solid.svg'
export default function Card() {
    return (
        <section className="section--card">
            <img className="section--card__img" src={hero5}></img>
            <div className="section--card--rating-container">
                <span>
                    <img className="section--card--rating__star-img" src={starSolid} />
                </span>
                <span className="section--card-rating__text">5/5(6) USA</span>
            </div>
            <p className="section--card__description">Life lessons with Karoline Smith Junior</p>
        </section>
    );
}