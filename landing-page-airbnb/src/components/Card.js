import React from "react";
import hero5 from '../images/hero5.jpg';
import starSolid from '../images/star-solid.svg'
export default function Card({img, description, rating, reviewCount, country, price, openSpots}) {
    return (<section className="section--card">
        {!openSpots && <span className="section--card__sold-out-text">SOLD OUT</span>}
                <img className="section--card__img" src={img}></img>
            <div className="section--card--rating-container">
                <span>
                    <img className="section--card--rating__star-img" src={starSolid} />
                </span>
                <span className="section--card-rating__text">{rating}({reviewCount}) {country}</span>
            </div>
            { description && <p className="section--card__description">{description}</p> }
            <p className="section--card__price">
                <span className="section--card__price--bold">From {price}</span>
                <span className="section--card__price--normal">/ person</span>
            </p>
        </section>
    );
}