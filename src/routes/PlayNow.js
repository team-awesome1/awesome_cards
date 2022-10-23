import Deck from "../deckData";
import Player from '../Player';
import { useState } from "react";
import Scoreboard from "../scoreboard/Scoreboard";

export default function PlayNow() {
  const [hand1Data, setHand1Data] = useState(null);
  const [hand2Data, setHand2Data] = useState(null);

  function startGame() {
    const deck = new Deck();
    deck.shuffle();
    setHand1Data(deck.deal(26))
    setHand2Data(deck.deal(26))
  }

  return (
    <>
      <button onClick={startGame}>Start Game</button>
      <h3>Player 1 Hand</h3>
      {hand1Data ? (<Player handData={hand1Data} />) : (<></>)}
      <h3>Player 2 Hand</h3>
      {hand2Data ? (<Player handData={hand2Data} />) : (<></>)}      
      <Scoreboard />
    </>
  );
}
