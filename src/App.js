import { Provider } from 'react-redux';
import store from './store/store';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  const location = useLocation();
  return (
    <Provider store={store}>
      <div className='App'>
        {location.pathname !== '/' ? <NavBar /> : null}
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
