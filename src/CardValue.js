import React, { useState } from "react";
// import blank_card from './svg/blank_card.svg';
import IMAGES from './images.js';
import './styles.css';
import SHAPES from "./shapes.js";



// const Card = ({ cardValue }) => {
const CardValue = ({ location, color }) => {

    const suit = "K_red";
    const shape = SHAPES["K"];

    return (
        <>
            <svg className={`card-value-${location}`}  viewBox="0 0 55 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={ shape } fill={ color }/>
            </svg>
            {/* <svg className={`card-value-${location}`} width="55" height="70" viewBox="0 0 55 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={ shape } fill={ color }/>
            </svg> */}
        </>
    )
}

export default CardValue;