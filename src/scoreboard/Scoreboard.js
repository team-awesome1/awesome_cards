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

const Scoreboard = ({ gameInProgress, player1Score, player2Score, totalCardsPlayer1, totalCardsPlayer2 }) => {
    
    player1Score = 0;
    player2Score = 0;
    let winningBattle;

    totalCardsPlayer1 = 26;
    totalCardsPlayer2 = 26;

    player1Score > player2Score ? winningBattle = true : winningBattle = false;


    return (
        <>
            { gameInProgress ?
            <div>
                { player1Score === 0 && player2Score === 0 ? 
                    <div className="container scoreboard">
                        <h4 className="scores-heading">You might win this battle...</h4>
                    <div className="row scoreboard-frame">
                        <div className="col scorecard-frame" id="user-score" >
                        <Scorecard title="Your hand:" score={0}/>
                        </div>
                        <div className="col scorecard-frame" >
                            <Scorecard title="Opponent's hand:" score={0}/>
                        </div>
                        <h4 className="scores-heading">But will you win the war?</h4>
                            <div className="war-scores">
                                <p className="war-score">Your score: {totalCardsPlayer1}</p>
                                <p className="war-score">Opponent's score: {totalCardsPlayer2}</p>
                            </div>
                    </div>
                    </div> : 
                        <div className="container scoreboard">
                            <h4 className="scores-heading">You might win this battle...</h4>
                        <div className="row">
                            <div className="col scorecard-frame" id="user-scorecard">
                                { winningBattle ? 
                                <Scorecard 
                                    title="Your hand:" 
                                    score={player1Score} msg="You win!" 
                                    decoration1={decoration.winningFace} 
                                    decoration2={decoration.winningParty} 
                                    decoration3={decoration.winningStar}
                                    background={confettiBackground}
                                    /> :
                                <Scorecard 
                                    title="Your hand:" 
                                    score={player1Score} 
                                    msg="Sorry, you lose!" 
                                    decoration1={decoration.losingFace} 
                                    decoration2={decoration.frownFace} 
                                    decoration3={decoration.angryFace}
                                    background={rainBackground}
                                    />}
                            </div>
                            <div className="col scorecard-frame" id="opponent-scorecard" >
                                <Scorecard title="Opponent's hand:" score={player2Score}/>
                            </div>
                            <h4 className="scores-heading">But will you win the war?</h4>
                            <div className="war-scores">
                                <p className="war-score">Your score: {totalCardsPlayer1}</p>
                                <p className="war-score">Opponent's score: {totalCardsPlayer2}</p>
                            </div>
                        </div>
                    </div>
                }
            </div> : null }
        </>
    )
}

export default Scoreboard;