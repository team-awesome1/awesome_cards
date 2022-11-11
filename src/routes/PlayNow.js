import Deck from "../deckData";
import CardArea from "../CardArea";
import { useState, useEffect } from "react";
import Scoreboard from "../scoreboard/Scoreboard";
import "../PlayNow.css";

export default function PlayNow() {
  const [hand1, setHand1] = useState(null);
  const [hand2, setHand2] = useState(null);
  const [player1Card, setPlayer1Card] = useState(null);
  const [player2Card, setPlayer2Card] = useState(null);
  const [winner, setWinner] = useState(null);
  const [gameStart, setGameStart] = useState(false);
  const [cardFaceUp, setCardFaceUp] = useState(false);

  const cardStrength = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "0": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14
  }

  function startGame() {
    const deck = new Deck();
    deck.shuffle();
    setHand1(deck.deal(26));
    setHand2(deck.deal(26));
  }

  // dummy function for dealCards until we have the real one
  function dealCards() {
  //   console.log("player1 hand", hand1Data)
  //   console.log("player2 hand", hand2Data)
  //   const cardNum = Math.floor(Math.random() * 26);
  //   const player1Card = hand1Data[cardNum];
  //   const player2Card = hand2Data[cardNum];
  //   console.log("player1Card", player1Card);
  //   console.log("player2Card", player2Card);  
    flipCard();
  }

  function start() {
    setCardFaceUp(true);
  }

  function flipCard() {
    console.log("STARTING (flip)", "winner", winner, "hand 1", hand1, "hadn 2", hand2);

    // first flip of game
    if(cardFaceUp === false) {
      setCardFaceUp(true);
    }
    // every time after first flip
    else {
      compareCards();
      moveCards();
    }

    console.log("ENDING (flip)", "winner", winner, "hand 1", hand1, "hadn 2", hand2);
  }


  function compareCards() {
    console.log("compareCards function running");
    let c1 = hand1[0];
    let c2 = hand2[0];

    let card1ValCode = c1[0];
    let card2ValCode = c2[0];
    let card1Strength = cardStrength[card1ValCode];
    let card2Strength = cardStrength[card2ValCode];

    setPlayer1Card(card1Strength);
    setPlayer2Card(card2Strength);
    let win;

    console.log("cardValCodes", card1ValCode, card2ValCode);
    if (card1Strength > card2Strength) {
      console.log("player1 has higher card");
      win = "player1";
    } else if (card1Strength < card2Strength) {
      console.log("player2 has higher card");
      win = "player2";
    } else {
      console.log("player1 and player2 have equal cards");
      win = "tie";
    }

    setWinner(win)
  }

  function moveCards() {
    let c1 = hand1[0];
    let c2 = hand2[0];
    let h1 = hand1.filter((c, i) => i !== 0);
    let h2 = hand2.filter((c, i) => i !== 0);
    if (winner === "player1") {
      h1.push(c1, c2);
    }
    if (winner === "player2") {
      h2.push(c1, c2);
    }
    setHand1(h1);
    setHand2(h2);
  }
  
  useEffect(() => {
    console.log("USE EFFECT:");
    console.log("hand 1", hand1);
    console.log("hand 2", hand2);
    console.log("winner", winner);
    console.log("cardFaceUp", cardFaceUp);
    }, [hand1, hand2, winner, cardFaceUp]);

  const showStatus = () => {
    // console.log("hand1", hand1);
    // console.log("hand2", hand2);
    console.log("winner", winner);
    console.log("cardFaceUp", cardFaceUp);
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
          player1Card={hand1[0]}
          player2Card={hand2[0]}
          card1FaceUp={cardFaceUp}
          card2FaceUp={cardFaceUp}
          // player1Card={player1Card}
          // player2Card={player2Card}
        />
        <div className="btn-box">
          <button className="game-btn" onClick={start}>Start</button> 
          <button className="game-btn" onClick={compareCards}>Compare Cards</button> 
          <button className="game-btn" onClick={moveCards}>Move Cards</button> 
          {/* <button className="game-btn" onClick={flipCard}>Play Card</button> 
          <button className="game-btn" onClick={showStatus}>Status</button>  */}
        </div>      
        <Scoreboard
          gameInProgress={gameStart}
          player1Score={player1Card}
          player2Score={player2Card} />
      </div>}
    </>
  );
}
