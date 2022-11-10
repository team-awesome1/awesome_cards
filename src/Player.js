import Card from './Card';

export default function Player({ card, faceUp }) {
  // const cardCode = card;

  return <Card cardCode={card} faceUp={faceUp} />;
}
