import { Provider } from 'react-redux';
import store from './store/store';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
