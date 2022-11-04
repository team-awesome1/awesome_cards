import Deck from "../deckData";
import CardArea from "../CardArea";
import { useState } from "react";
import Scoreboard from "../scoreboard/Scoreboard";
import "../PlayNow.css";

export default function PlayNow() {
  const [hand1Data, setHand1Data] = useState(null);
  const [hand2Data, setHand2Data] = useState(null);
  const [gameStart, setGameStart] = useState(false)

  function startGame() {
    const deck = new Deck();
    deck.shuffle();
    setHand1Data(deck.deal(26))
    setHand2Data(deck.deal(26))
  }

  // dummy function for dealCards until we have the real one
  function dealCards() {
    const cardNum = Math.floor(Math.random() * 26);
    const player1Card = hand1Data[cardNum];
    const player2Card = hand2Data[cardNum];
    console.log(player1Card);
    console.log(player2Card);  
  }

  return (
    <>
      { !gameStart ? 
      <div className="play-now">
        <h2 className="ready-to-play">Ready to play?</h2>
        <button className="game-btn" onClick={() => {
        setGameStart(!gameStart);
        startGame();
        }}>Start Game</button>
      </div> : 
      <div className="card-area">        
        <CardArea
          gameInProgress={gameStart}
          hand1Data={hand1Data}
          hand2Data={hand2Data}
        />
        <div className="btn-box">
          <button className="game-btn" onClick={dealCards}>Deal cards</button> 
        </div>      
        <Scoreboard
          gameInProgress={gameStart} />
      </div>}
    </>
  );
}
