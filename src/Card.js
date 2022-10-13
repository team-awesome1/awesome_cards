import React, { useState } from "react";
import blank_card from './svg/blank_card.svg';
import IMAGES from './images.js';
import './styles.css';
import CardValue from "./CardValue";


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
            // <div className="game-card-container">
            //     <div className="game-card">
            //         <img className="blank-game-card" src={blank_card} alt="" />
            //         <img className={`card-value ${(color === "red") ? "card-red" : "card-black"}`} src={IMAGES[value + "_" + `${color}`]} alt="" />
            //         <img className="card-suit" src={IMAGES[suit]} alt="" />
            //         <CardValue suit={ suit } value={ value } location="top" color={ color } />
            //         <CardValue suit={ suit } value={ value } location="bottom" color={ color } />
            //     </div>
            // </div>
            <div>
                <div class="demoWrapper">
                    <div class="demoCard"></div>
                </div>
                <div class="demoWrapper2">
                    <div class="demoCard2">
                        <div class="card-value2">K</div>
                        <div class="card-value2b">K</div>
                        <img className="card-suit" src={IMAGES[suit]} alt="" />
                    </div>
                </div>
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