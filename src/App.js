import { Provider } from 'react-redux';
import store from './store/store';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* a nav bar can safely go here */}
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
