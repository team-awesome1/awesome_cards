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

const Scoreboard = ({ gameInProgress, player1Score, player2Score }) => {
    
    player1Score = 0;
    player2Score = 0;
    let winning;

    player1Score > player2Score ? winning = true : winning = false;
    
    return (
        <>
            { gameInProgress ?
            <div>
                { player1Score === 0 && player2Score === 0 ? 
                    <div className="container scoreboard">
                    <div className="row">
                        <div className="col scorecard-frame" id="user-score" >
                        <Scorecard title="Your score:" score={0}/>
                        </div>
                        <div className="col scorecard-frame" >
                            <Scorecard title="Opponent's score:" score={0}/>
                        </div>
                    </div>
                    </div> : 
                        <div className="container scoreboard">
                        <div className="row">
                            <div className="col scorecard-frame" id="user-scorecard">
                                { winning ? 
                                <Scorecard 
                                    title="Your score:" 
                                    score={player1Score} msg="You win!" 
                                    decoration1={decoration.winningFace} 
                                    decoration2={decoration.winningParty} 
                                    decoration3={decoration.winningStar}
                                    background={confettiBackground}
                                    /> :
                                <Scorecard 
                                    title="Your score:" 
                                    score={player1Score} 
                                    msg="Sorry, you lose!" 
                                    decoration1={decoration.losingFace} 
                                    decoration2={decoration.frownFace} 
                                    decoration3={decoration.angryFace}
                                    background={rainBackground}
                                    />}
                            </div>
                            <div className="col scorecard-frame" id="opponent-scorecard" >
                                <Scorecard title="Opponent's score:" score={player2Score}/>
                            </div>
                        </div>
                    </div>
                }
            </div> : null }
        </>
    )
}







// const Scoreboard = ({ gameInProgress }) => {
    
//     let userScore = 0;
//     let opponentScore = 0;
//     let winning;

//     userScore > opponentScore ? winning = true : winning = false;
    

//     if (userScore === 0 && opponentScore === 0) {
//         return (
//             <div className="container scoreboard">
//             <div className="row">
//                 <div className="col scorecard-frame" id="user-score" >
//                    <Scorecard title="Your score:" score={0}/>
//                 </div>
//                 <div className="col scorecard-frame" >
//                     <Scorecard title="Opponent's score:" score={0}/>
//                 </div>
//             </div>
//             </div>
//         )
//     }

//     else {
//         return (
//             <div className="container scoreboard">
//                 <div className="row">
//                     <div className="col scorecard-frame" id="user-scorecard">
//                         { winning ? 
//                         <Scorecard 
//                             title="Your score:" 
//                             score={userScore} msg="You win!" 
//                             decoration1={decoration.winningFace} 
//                             decoration2={decoration.winningParty} 
//                             decoration3={decoration.winningStar}
//                             background={confettiBackground}
//                             /> :
//                         <Scorecard 
//                             title="Your score:" 
//                             score={userScore} 
//                             msg="Sorry, you lose!" 
//                             decoration1={decoration.losingFace} 
//                             decoration2={decoration.frownFace} 
//                             decoration3={decoration.angryFace}
//                             background={rainBackground}
//                             />}
//                     </div>
//                     <div className="col scorecard-frame" id="opponent-scorecard" >
//                         <Scorecard title="Opponent's score:" score={opponentScore}/>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default Scoreboard;