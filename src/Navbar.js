import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Homepage from './Homepage';
import Instructions from './routes/Instructions';
import About from './routes/About';
import PlayNow from './routes/PlayNow';
import SignIn from './routes/SignIn';


const Navbar = () => {
    const curr_location = window.location.pathname;
    console.log(curr_location);
    return (
        <nav className="Navbar">
            <ul className="NavLinks">
            <NavLink to="/" element={<Homepage />}><li>Home</li></NavLink> {/* "Sign In" should change to "Sign Out" if user is already logged in */}
            <NavLink to="/play-now" element={<PlayNow />}><li>Play Now</li></NavLink>
            <NavLink to="/instructions" element={<Instructions />}><li>Instructions</li></NavLink>
            <NavLink to="/about" element={<About />}><li>About</li></NavLink>
            <NavLink to="/sign-in" element={<SignIn />}><li>Sign In</li></NavLink> {/* "Sign In" should change to "Sign Out" if user is already logged in */}
            </ul>
        </nav>
    )
}

export default Navbar;