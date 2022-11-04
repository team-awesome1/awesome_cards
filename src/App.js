// import { Provider } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './Navbar';
import './styles/App.scss'

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      {location.pathname !== '/' ? <NavBar /> : null}
      <Outlet />
    </div>
  );
}

export default App;
