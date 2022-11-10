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
    "2": 1,
    "3": 2,
    "4": 3,
    "5": 4,
    "6": 5,
    "7": 6,
    "8": 7,
    "9": 8,
    "0": 9,
    "J": 10,
    "Q": 11,
    "K": 12,
    "A": 13
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

  function flipCard() {
    if(cardFaceUp === false) {
      setCardFaceUp(true);
    }
    setWinner(() => compareCards(hand1[0], hand2[0]));

  }
  // function flipCard() {
  //   console.log("player1 hand", hand1)
  //   console.log("player2 hand", hand2)
  //   let card1 = hand1[0];
  //   let card2 = hand2[0];
  //   setPlayer1Card(hand1[0]);
  //   setPlayer2Card(hand2[0]);
  //   setHand1(hand1.filter((c, i) => i !== 0));
  //   setHand2(hand2.filter((c, i) => i !== 0));
  //   // compare flipped cards to find winner
  //   console.log("player 1 and 2 cards:", player1Card, player2Card);
  //   if (player1Card !== null && player2Card !== null) {
  //     setWinner(() => compareCards(card1, card2));
  //   }
  // }

  useEffect(() => {
    console.log("USE EFFECT:");
    console.log("hand 1", hand1);
    console.log("hand 2", hand2);
    }, [hand1, hand2]);

  function compareCards(cardCode1, cardCode2) {
    console.log("compareCards function running");
    let card1Num = cardCode1[0];
    let card2Num = cardCode2[0];
    let card1Value = cardStrength[card1Num];
    let card2Value = cardStrength[card2Num];

    let c1 = hand1[0];
    let c2 = hand2[0];
    let h1 = hand1.filter((c, i) => i !== 0);
    let h2 = hand2.filter((c, i) => i !== 0);
    let win;
    // setHand1(hand1.filter((c, i) => i !== 0));
    // setHand2(hand2.filter((c, i) => i !== 0));

    if (card1Value > card2Value) {
      // setHand1(hand1.filter((c, i) => i !== 0)[...hand1, player1Card, player2Card]);
      // h1 = [...h1, c1, c2];
      h1.push(c1, c2);
      console.log("player1 has higher card");
      // cardsToWinner(hand1)
      win = "player1";
    }
    if (card1Value < card2Value) {
      // h2 = [...hand2, c1, c2];
      h2.push(c1, c2);
      console.log("player2 has higher card");
      win = "player2";
    } else {
      console.log("player1 and player2 have equal cards");
      win = "tie";
    }
    setHand1(h1);
    setHand2(h2);
    return win;
  }

  const showStatus = () => {
    console.log("hand1", hand1);
    console.log("hand2", hand2);
    console.log("player1Card", player1Card);
    console.log("player2Card", player2Card);
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
          <button className="game-btn" onClick={dealCards}>Deal cards</button> 
          <button className="game-btn" onClick={flipCard}>Flip Card</button> 
          <button className="game-btn" onClick={showStatus}>Status</button> 
        </div>      
        <Scoreboard
          gameInProgress={gameStart} />
      </div>}
    </>
  );
}
