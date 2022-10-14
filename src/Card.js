import React, { useState } from "react";
import blank_card from './svg/blank_card.svg';
import IMAGES from './images.js';
import './styles.css';


// const Card = ({ value, suit, faceUp }) => {
const Card = ({ cardCode }) => {
    // keep track of card face up or face down
    const [isShowing, setIsShowing] = useState(true);

    console.log("cardCode:", cardCode)
    let value = cardCode[0]
    let suit = cardCode[1]
    let valueColor;
    console.log("value", value)
    console.log("suit", suit)
    if (suit === "H" || suit === "D") {
        valueColor = "suit-heart-diamond";
    } else {
        valueColor = "suit-club-spade";
    }
    if (value === "0") {value = "10"};

    return (
        <>
        {isShowing ? (
            <div>
                <div class="card-wrapper">
                    <div class="card-background">
                        <div class={`card-value-top ${valueColor}`}>{value}</div>
                        <div class={`card-value-bottom ${valueColor}`}>{value}</div>
                        <img className="card-suit" src={IMAGES[suit]} alt="card suit" />
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
