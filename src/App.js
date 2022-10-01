// import { Provider } from 'react-redux';
import store from './store/store';
import { Outlet } from 'react-router-dom';
import Card from './Card';
import CardValue from './CardValue';

function App() {
  return (
    <>
      <Card cardCode={"KH"}/>
    </>
  );
}

export default App;
