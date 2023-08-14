import React from "react";
import "../App.css"
import logo from "../images/trollface1.png";

function Header(){
    return(
        <div className="header">
            <div className="header--logo">
                <img src={logo} alt="troll face" />
                <h1>Meme Generator</h1>
            </div>
            <div className="header--text">
                <h3>React courses -  Project 3</h3>
            </div>
        </div>
    )
}

export default Header;
