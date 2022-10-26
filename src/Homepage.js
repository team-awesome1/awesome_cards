import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import './buttons.css';
import Card from './Card';


const Homepage = () => {
  return (
    <div className='Homepage'>
      <div className='OptionsGear'>
      </div>
      <div className='container'>
        <h1 className='Title'>WAR!</h1>
        <div className="buttons">
          <Link to={'/sign-in'}><button className="Btn SignIn">Sign in/Sign up</button></Link>
          <Link to={'/play-now'}><button className="Btn PlayNow">Play Now</button></Link>        
          <Link to={'/instructions'}><button className="Btn HowTo">How to Play</button></Link>
        </div>

      </div>
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
