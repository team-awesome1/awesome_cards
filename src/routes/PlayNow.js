import Card from "../Card";
import Deck from "../deckData";
import { useState } from "react";

export default function PlayNow() {
  const [startGame, setStartGame] = useState(false);
  let p1Hand;
  let p2Hand;

  if (startGame) {
    const deck = new Deck();
    deck.shuffle();
    const hand1Data = deck.deal(26);
    const hand2Data = deck.deal(26);
    p1Hand = hand1Data.map((card) => {
      return (
        <Card cardCode={card} />
      )
    })
    p2Hand = hand2Data.map((card) => {
      return (
        <Card cardCode={card} />
      )
    })
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>PlayNow Page Under Construction...</h2>
      <button onClick={setStartGame}>Start Game</button>
      <h3>Player 1 Hand</h3>
      {p1Hand}
      <h3>Player 2 Hand</h3>
      {p2Hand}
    </main>
  );
}
