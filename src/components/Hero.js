import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import "../styles/Hero.css";

const Hero = () => (
  <header className="Hero">
    {/* Header Section */}
    <nav className="navbar">
      <div className="logo">Pathmakers</div>
      <ul className="nav-links">
        <li>Sign on</li>
        <li><Link to="AboutUs.jsx">About Us</Link></li>
        <li>App</li>
      </ul>
    </nav>
    <div className="header-content">
      <h1>Choose your next adventure</h1>
      <p>Made just for you!</p>
      <button className="join-button">Chat with Viki</button>
    </div>
  </header>
);

export default Hero;
