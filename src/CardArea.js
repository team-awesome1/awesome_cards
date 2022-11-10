import Player from './Player';
import './styles/CardArea.scss';

export default function CardArea(props) {
  const { player1Card, player2Card, gameInProgress, card1FaceUp, card2FaceUp } = props;

  return (
    <div className='cardArea-wrapper'>
      {gameInProgress ? (
        <div className='hero is-success is-small'>
          <div className='card_area'>
            <div className='container'>
              <h3>Player 1 Hand</h3>
              {player1Card ? <Player card={player1Card} faceUp={card1FaceUp} /> : <></>}
            </div>
            <div className='container'>
              <h3>Player 2 Hand</h3>
              {player2Card ? <Player card={player2Card} faceUp={card2FaceUp} /> : <></>}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
