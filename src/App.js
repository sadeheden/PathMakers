import React from "react";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Adventure from "./components/Adventure";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">eurotravel.com</div>
          <ul className="nav-links">
            <li>Home</li>
            <li>Blog</li>
            <li>Guides</li>
            <li>Destinations</li>
            <li>Forum</li>
          </ul>
        </nav>
        <div className="header-content">
          <h1>Enjoy Europe</h1>
          <p>Travel, explore, and discover every corner of Europe.</p>
          <button className="join-button">JOIN EUROTRAVEL</button>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <i className="icon">✈️</i>
          <h3>TRAVEL</h3>
          <p>We offer you the best travel guides, quick and simple, to discover the best of your favorite cities.</p>
        </div>
        <div className="feature">
          <i className="icon">📖</i>
          <h3>DISCOVER</h3>
          <p>Discover all the corners of Europe and enjoy the culture, history, and gastronomy of the old continent.</p>
        </div>
        <div className="feature">
          <i className="icon">🌍</i>
          <h3>PARTICIPATE</h3>
          <p>Join and meet travelers, share in the forum, write on the blog, and tell us about your favorite places.</p>
        </div>
      </section>

      {/* Guides Section */}
      <section className="guides">
        <h2>Travel Guides</h2>
        <p>We tell you everything about the best destinations and corners of Europe.</p>
        <div className="guides-gallery">
          <img src="/images/guide1.jpg" alt="Guide 1" />
          <img src="/images/guide2.jpg" alt="Guide 2" />
          <img src="/images/guide3.jpg" alt="Guide 3" />
          <img src="/images/guide4.jpg" alt="Guide 4" />
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <h2>Explore Amsterdam</h2>
        <article>
          <h3>NYX Nightclub in Amsterdam</h3>
          <p>NYX is one of the most famous nightclubs in the city...</p>
          <a href="#">Read more</a>
        </article>
        <h2>Blog</h2>
        <ul>
          <li>Barcelona in 2 minutes, Barcelona GO!</li>
          <li>Remembering Berlin in one day</li>
          <li>Explore Europe in 4 minutes of video</li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="subscribe">
          <h3>SUBSCRIBE</h3>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button type="submit">Subscribe!</button>
          </form>
        </div>
        <div className="social">
          <h3>FOLLOW US</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Google+</li>
          </ul>
        </div>
        <div className="about">
          <h3>ABOUT US</h3>
          <ul>
            <li>About Eurotravel</li>
            <li>Privacy</li>
            <li>Contact</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
