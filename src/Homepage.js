import React from "react";
import "./Homepage.css"

const Homepage = () => {
    return (
        <div className="Homepage">
            <div className="OptionsGear">
                {/* <OptionsGear /> */}
                {/* OptionsGear Component goes here; does not exist yet--see placeholder below */}
                {/* Attribution link is required if we want to use this icon for free */}
                <figure  >
                    <img className="gearIcon" src="/gearIcon.png" alt="gear wheel"/>
                    <figcaption><a target="_blank" rel="noreferrer" href="https://icons8.com/icon/qpThLj7vV2Sg/settings">Settings</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a></figcaption>
                </figure>
            </div>
            <div>
                <h1 className="Title">WAR!</h1>
            </div>
            <div className="Login Btn">
                {/* <Button /> */}
                {/* "Sign-in/Sign-up" button (dependent upon authorization) goes here; does not exist yet--see placeholder below */}
                <button>Sign in/Sign up</button>
            </div>
            <div className="PlayNow Btn">
                {/* <Button /> */}
                {/* "Play Now" button goes here; does not exist yet--see placeholder below */}
                <button>Play Now</button>
            </div>
            <div className="HowTo Btn">
                {/* <Button /> */}
                {/* "How to Play" button goes here; does not exist yet--see placeholder below */}
                <button>How to Play</button>
            </div>
            {/* This attribution for wallpaper image should probably move somewhere else so it appears at the bottom of the screen, not as part of the component itself */}
            <footer><a href="https://www.freepik.com/free-vector/background-seamless-pattern-vector-with-cute-memphis_15841841.htm#query=cute%20wallpaper&position=15&from_view=search">Background image by rawpixel.com</a> on Freepik</footer>
        </div>
    )
}

export default Homepage;