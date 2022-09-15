import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      {/* a nav bar can safely go here */}
      <Outlet />
    </div>
  );
}

export default App;
