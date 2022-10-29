import Card from './Card';

export default function Player({ handData }) {
  const currentCard = handData[0];
  return <Card cardCode={currentCard} />;
}
