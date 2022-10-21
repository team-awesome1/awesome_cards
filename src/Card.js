import React, { useState } from "react";
import IMAGES from './images.js';
import './Card.css';


// const Card = ({ value, suit, faceUp }) => {
const Card = ({ cardCode }) => {
    // keep track of card face up or face down
    const [isShowing, setIsShowing] = useState(true);

    console.log("cardCode:", cardCode)
    let valueCode = cardCode[0]
    let suitCode = cardCode[1]
    let suit;
    let valueColor;
    let faceCard;
    
    if (valueCode === "J" || valueCode === "Q" || valueCode === "K") {
        if (valueCode === "J") {faceCard = "jack"};
        if (valueCode === "Q") {faceCard = "queen"};
        if (valueCode === "K") {faceCard = "king"};
    }
    console.log("value", valueCode)
    console.log("suit", suitCode)
    if (suitCode === "H" || suitCode === "D") {

        valueColor = "suit-heart-diamond";
        suit = suitCode === "H" ? "heart" : "diamond";
    } else {
        valueColor = "suit-club-spade";

        suit = suitCode === "C" ? "club" : "spade";
    } 

    if (valueCode === "0") {valueCode = "10"};

    return (
        <>
        {isShowing ? (
            <div>
                <div class="card-wrapper">
                    <div class="card-background">
                        <div class={`card-value-top ${valueColor}`}>{valueCode}</div>
                        <div class={`card-value-bottom ${valueColor}`}>{valueCode}</div>
                        <img className="card-suit" src={IMAGES[suitCode]} alt="card suit" />
                        {faceCard ? <img className="face-card" src={IMAGES[faceCard]} /> : ""}

                    </div>
                </div>
            </div>
            ) : (
                <div className="card-wrapper">
                    <div class="card-background">
                        <img class="card-back" src={IMAGES["theme-card-back"]} alt="" />
                    </div>                    
                </div>
            )

            }
        </>
    )
}

export default Card;
