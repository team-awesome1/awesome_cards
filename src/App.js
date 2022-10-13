// import { Provider } from 'react-redux';
import store from './store/store';
import { Outlet } from 'react-router-dom';
import Card from './Card';
import CardValue from './CardValue';

function App() {
  return (
    <>
      <Card cardCode={"KH"}/>
      <Card cardCode={"9S"}/>
      <Card cardCode={"JD"}/>
      <Card cardCode={"0C"}/>
    </>
  );
}

export default App;
