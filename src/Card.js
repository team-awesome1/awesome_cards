import React, { useState } from "react";
import blank_card from './svg/blank_card.svg';
import IMAGES from './images.js';
import './styles.css';

// import {} from './svg'

// const Card = ({ value, suit, faceUp }) => {
const Card = ({ cardCode }) => {
    // keep track of card face up or face down
    const [isShowing, setIsShowing] = useState(true);

    console.log("cardCode:", cardCode)
    let value = cardCode[0]
    let suit = cardCode[1]
    let color;
    console.log("value", value)
    console.log("suit", suit)
    if (suit === "H" || suit === "D") {
        color = "red";
    } else {
        color = "black";
    }

    return (
        <>
            {isShowing ? (
                <div className="game-card-container">
                    <img className="game-card" src={blank_card} alt="" />
                    <img className={`game-card value ${(color === "red") ? "card-red" : "card-black"}`} src={IMAGES[value + "_" + `${color}`]} alt="" />
                    <img className="game-card suit" src={IMAGES[suit]} alt="" />
                </div>
            ) : (
                <div className="game-card-container">
                    <img className="game-card" src={blank_card} alt="" />
                    <img className="game-card" src={IMAGES["back"]} alt="" />
                </div>
            )
            }
        </>
    )
}

export default Card;