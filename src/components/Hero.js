import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Hero.css";

const Hero = () => (
  <header className="Hero">
    {/* Header Section */}
    <header className="header">
      <nav className="navbar">
        <div className="logo">Pathmakers</div>
        <ul className="nav-links">
          <li>
            <Link to="/sign-on">Sign on</Link>
          </li>
          <li>
            <NavLink to="/about-us" activeClassName="active-link">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/app" activeClassName="active-link">
              App
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header-content">
        <h1>Choose your next adventure</h1>
        <p>Made just for you!</p>
        <button className="join-button">Chat with Viki</button>
      </div>
    </header>
  </header>
);

export default Hero;
