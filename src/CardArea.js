import Player from './Player';
import './styles/CardArea.scss';

export default function CardArea(props) {
  const { hand1Data, hand2Data } = props;

  return (
    <div className='cardArea-wrapper'>
      <div className='hero is-success is-small'>
        <div className='card_area'>
          <div className='container'>
            <h3>Player 1 Hand</h3>
            {hand1Data ? <Player handData={hand1Data} /> : <></>}
          </div>
          <div className='container'>
            <h3>Player 2 Hand</h3>
            {hand2Data ? <Player handData={hand2Data} /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
}
