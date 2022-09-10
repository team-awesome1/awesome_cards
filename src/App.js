import logo from './logo.svg';
import sampleCard from './sampleCard'
import Card from './Card.js';

function App() {
  return (
    <div className="App">
      <div>
        <Card cardCode="2S" />
        <Card cardCode="8C" />
        <Card cardCode="0H" />
        <Card cardCode="QD" />
        <Card cardCode="2S" />
        <Card cardCode="9H" />
        <Card cardCode="JC" />
      </div>
    </div>
  );
}

export default App;
