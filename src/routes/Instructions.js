import '../instructions.css';


export default function Instructions() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="container">
        <a href="#">
          <img src="/gearIcon.png" alt="settings gear icon" id="settings"></img>
        </a>
        <h1>
          War!
        </h1>
        <div className="intructions">
          <h2>
            How to Play
          </h2>
          <p>
            The game begins with the deck being split evenly between you and the other player, or computer. At the top of
            the round, each player will tap the top of their respective decks to play the top card. Playing the cards turns
            them face up revealing the face value of the cards. Whichever card has the higher face value wins and the winner
            takes both cards and they are placed face down at the bottom of the winning player's deck.
          </p>
          <h3 id="question-same">
            But what if both cards hold the same face value?
          </h3>
          <p>
            Great question! In the event of a tie, both players enter into War! mode. In War! mode, each player taps their
            deck to play one card face down and one card face up. If either of the cards is a higher face value, the winning
            player takes all cards currently in play and adds them to their deck. If another tie happens, War! mode
            continues until one player has one the pile of cards in play.
          </p>
          <h3 id="question-win">
            How do I win?
          </h3>
          <p>
            Another great question! The first player to collect all 52 cards in their deck wins the game.
          </p>
          <p>Sounds easy, right? But don't get too confident! After all, you may win a few battles, but can you win the War?
          </p>
        </div>
        <a href="/play-now" id="play">Play Now</a>
        <a href="/" id="home">Back to Home</a>
      </div>
    </main>
  );
}
