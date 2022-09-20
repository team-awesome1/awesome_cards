import React, {useState} from "react";
import Ks from './svg/Ks.svg';
import spades from './svg/spades.svg';
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
    console.log("value", value)
    console.log("suit", suit)

    return(
        <>
        {isShowing ? (
            <div className="game-card-container">
                <img className="game-card" src={blank_card} alt="" />
                <img className="game-card value" src={IMAGES[value]} alt="" />
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