import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}>
        <Link to='/'>Home</Link> | <Link to='/instructions'>Instructions</Link> | <Link to='/about'>About</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
