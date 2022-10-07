import React from 'react';
import { NavLink } from 'react-router-dom';
import Homepage from './Homepage';
import Instructions from './routes/Instructions';
import About from './routes/About';
import PlayNow from './routes/PlayNow';
import SignIn from './routes/SignIn';
import Logo from './Logo';
import './Navbar.css';


const NavBar = () => { 
    return (
        <nav className="navbar navbar-expand-lg" id="navbar">
            <div className="container-fluid">
                <NavLink to="/" element={<Homepage />} id="logo" className="navbar-brand pt-3"  href="/"><Logo /></NavLink> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item pt-2">
                            <NavLink to="/play-now" element={<PlayNow />} id="play-now" className="nav-link active" aria-current="page" href="/play-now">Play Now</NavLink>
                        </li>
                        <li className="nav-item pt-2">
                            <NavLink to="/instructions" element={<Instructions />} id="instructions"className="nav-link active" aria-current="page"href="/instructions">Instructions</NavLink>
                        </li>
                        <li className="nav-item pt-2">
                           <NavLink to="/about" element={<About />} id="about" className="nav-link active" aria-current="page"href="/about">About</NavLink>
                        </li>
                    </ul>
                    <button className="btn btn-outline" type="submit" id="loginBtn"><NavLink to="/sign-in" element={<SignIn />} id="loginBtnText">Sign In</NavLink></button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;