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
            <div class="container-fluid">
                <a class="navbar-brand pt-3"  href="/"><NavLink to="/" element={<Homepage />} id="logo"><Logo /></NavLink> </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item pt-2">
                            <a class="nav-link active" aria-current="page" href="/play-now" ><NavLink to="/play-now" element={<PlayNow />} id="play-now">Play Now</NavLink></a>
                        </li>
                        <li class="nav-item pt-2">
                            <a class="nav-link active" aria-current="page"href="/instructions" ><NavLink to="/instructions" element={<Instructions />} id="instructions">Instructions</NavLink></a>
                        </li>
                        <li class="nav-item pt-2">
                            <a class="nav-link active" aria-current="page"href="/about"><NavLink to="/about" element={<About />} id="about">About</NavLink></a>
                        </li>
                    </ul>
                    <button class="btn btn-outline" type="submit" id="loginBtn"><NavLink to="/sign-in" element={<SignIn />} id="loginBtnText">Sign In</NavLink></button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;