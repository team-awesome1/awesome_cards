import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Homepage.css';

const Homepage = () => {
  return (
    <div className='Homepage'>
      <div className='container'>
        <h1 className='Title'>WAR!</h1>
        <Link to={'/sign-in'}>
          <button className='Btn SignIn'>Sign In</button>
        </Link>
        <Link to={'/play-now'}>
          <button className='Btn PlayNow'>Play Now</button>
        </Link>
        <Link to={'/instructions'}>
          <button className='Btn HowTo'>How to Play</button>
        </Link>
      </div>
      {/* This attribution for wallpaper image should probably move somewhere else? (Could move to about page) */}
      <footer>
        <a href='https://www.freepik.com/free-vector/background-seamless-pattern-vector-with-cute-memphis_15841841.htm#query=cute%20wallpaper&position=15&from_view=search'>
          Background image by rawpixel.com
        </a>{' '}
        on Freepik
      </footer>
    </div>
  );
};

export default Homepage;
