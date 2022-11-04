import Player from './Player';
import './styles/CardArea.scss';

export default function CardArea(props) {
  const { player1Card, player2Card, gameInProgress } = props;

  return (
    <div className='cardArea-wrapper'>
      {gameInProgress ? (
        <div className='hero is-success is-small'>
          <div className='card_area'>
            <div className='container'>
              <h3>Player 1 Hand</h3>
              {player1Card ? <Player card={player1Card} /> : <></>}
            </div>
            <div className='container'>
              <h3>Player 2 Hand</h3>
              {player2Card ? <Player card={player2Card} /> : <></>}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
