// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./root.style.css";
import "./navBar.style.css";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="navBar">
      <div className="logoArea">
        <h1 className="logo">Jack Symonds - Portfolio.</h1>
      </div>
      <ul className="navButtons">
        <Link to="/home" className="navButton">
          Home
        </Link>
        <Link to="/aboutjack" className="navButton">
          About Jack
        </Link>
        <Link to="/portfolio" className="navButton">
          Portfolio
        </Link>
        <Link to="/skillsandexperience" className="navButton">
          Skills & Experience
        </Link>
        <Link to="/contact" className="navButton">
          Contact Jack
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
