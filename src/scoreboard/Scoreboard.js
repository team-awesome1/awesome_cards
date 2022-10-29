import React from "react";
import Scorecard from "./Scorecard";
import "./Scorecard.css";
import confettiBackground from "./confetti-17.gif";
import rainBackground from "./rain.webp";


const decoration = {
    winningStar: "🌟",
    winningFace: "🥳",
    winningParty: "🎉",
    losingFace: "😩",
    angryFace: "😡",
    frownFace: "😕",
}

const Scoreboard = () => {
    
    let userScore = 0;
    let opponentScore = 0;
    let winning;

    userScore > opponentScore ? winning = true : winning = false;
    
    // default blank scoreboards showing zero points for both players on start
    if (userScore === 0 && opponentScore === 0) {
        return (
            <div className="container scoreboard">
            <div className="row">
                <div className="col scorecard-frame" id="user-score" >
                   <Scorecard title="Your score:" score="0" />
                </div>
                <div className="col scorecard-frame" >
                    <Scorecard title="Opponent's score:" score="0"/>
                </div>
            </div>
        </div>
        )
    }


    // scoreboards to display once play has started
    // shows user's win/lose status
    else {
        return (
            <div className="container scoreboard">
                <div className="row">
                    <div className="col scorecard-frame" id="user-scorecard">
                        { winning ? 
                        <Scorecard 
                            title="Your score:" 
                            score={userScore} msg="You win!" 
                            decoration1={decoration.winningFace} 
                            decoration2={decoration.winningParty} 
                            decoration3={decoration.winningStar}
                            background={confettiBackground}
                            /> :
                        <Scorecard 
                            title="Your score:" 
                            score={userScore} 
                            msg="Sorry, you lose!" 
                            decoration1={decoration.losingFace} 
                            decoration2={decoration.frownFace} 
                            decoration3={decoration.angryFace}
                            background={rainBackground}
                            />}
                    </div>
                    <div className="col scorecard-frame" id="opponent-scorecard" >
                        <Scorecard title="Opponent's score:" score={opponentScore}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Scoreboard;