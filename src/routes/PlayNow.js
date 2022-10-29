import Deck from "../deckData";
import CardArea from "../CardArea";
import { useState } from "react";
import Scoreboard from "../scoreboard/Scoreboard";

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
  return (
    <>
      <button onClick={() => {
        setGameStart(!gameStart);
        startGame();
        }}>Start Game</button>

      <CardArea
        gameInProgress={gameStart}
        hand1Data={hand1Data}
        hand2Data={hand2Data}
       />    
      <Scoreboard />
    </>
  );
}
