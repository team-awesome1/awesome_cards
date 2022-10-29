import React from "react";
import "./Scorecard.css";


const Scorecard = ({ title, score, msg, decoration1, decoration2, decoration3, background}) => {
    return (
         <div className="scorecard w-100" style={{backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
            <h3 className="scorecard-title">{title}</h3>            
                <div>               
                    <div className="score">{score}</div>
                    <div className="decoration">{decoration1}{decoration2}{decoration3}</div>
                </div>
            <h4 className="message">{msg}
            </h4>
            
        </div> 
    )
}

export default Scorecard;