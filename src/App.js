import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}>
        <Link to='/' id="home-link">Home</Link> | <Link to='/instructions' id="instructions-link">Instructions</Link> | <Link to='/about' id="about-link">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
