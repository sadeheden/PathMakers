import React from "react";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Adventure from "./components/Adventure";
import "./styles/App.css";
import ReviewsSection from "./components/ReviewsSection";


const App = () => {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
  <nav className="navbar">
    <div className="logo">Pathmakers</div>
    <ul className="nav-links">
      <li>Sign on</li>
      <li>About Us</li>
      <li>App</li>
    </ul>
  </nav>
  <div className="header-content">
    <h1>Choose your next adventure</h1>
    <p>Made just for you!</p>
    <button className="join-button">Chat with Viki</button>
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

  
  {/* Destination Section */}
  <section className="destination">
    <h3>Find Your Best Destination</h3>

    <div className="destination-grid">
      <div className="card">
        <img 
          src="https://www.masa.co.il/wp-content/uploads/2019/04/nature.jpg" 
          alt="Amazon" 
        />
        <p>Amazon</p>
      </div>
      <div className="card">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOzYm_U5m-QKwHZP4CTAKA5WnfuBgyJHeiEJJbBpwe8eSjsq_IqnACigiqnOftAQa-Hc&usqp=CAU" 
          alt="Rome" 
        />
        <p>Rome, Italy</p>
      </div>
      <div className="card">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOcEFe0xr7mtuVdHhmdui2p7k908-KxhZdZg&s" 
          alt="USA" 
        />
        <p>USA, Chicago</p>
      </div>
      <div className="card">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpDWvqmZ-SrkS5vit4DcwkLcZtk7OAQyAuA&s" 
          alt="London" 
        />
        <p>UK, London</p>
      </div>
    </div>
  </section>

  {/* Vacation Plan Section */}
  <section className="vacation-plan">
    <h3>Best Vacation Plan</h3>
    <div className="vacation-grid">
      <div className="card">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjlWpW_EnMKR9yXQw4LD9v_BAGlpNt86m4A&s" 
          alt="Rome" 
        />
        <p>Rome, Italy - $746</p>
      </div>
      <div className="card">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPULcBZZW4ZzfaXrHxafuJkYro3kwEJ7BRvw&s" 
          alt="Dubai" 
        />
        <p>Dubai - $746</p>
      </div>
      <div className="card">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOH0imSYs3Jt9J_R9FCVGqp-f-qJpGXrWkew&s" 
          alt="Chicago" 
        />
        <p>USA, Chicago - $746</p>
      </div>
      <div className="card">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-IDFDN4ElIqnnJWkPBv_V72Ds7qneGjE8lQ&s" 
          alt="London" 
        />
        <p>UK, London - $746</p>
      </div>
    </div>
  </section>

  <section className="reviews-section">
  <h2>Trusted by Our Families</h2>
  <div className="rating-summary">
    <span>⭐ 5.0 rating of 25 reviews</span>
    <button className="leave-review">Leave a review</button>
  </div>
  <div className="reviews-container">
    <button className="arrow left">&lt;</button>
    <div className="review-card">
      <img src="https://via.placeholder.com/50" alt="User" />
      <h3>Celeste Toomey</h3>
      <p><strong>⭐ 5 stars</strong></p>
      <p>
        A lovely family-run farm! Their animals are pasture-raised ethically
        and sustainably... <a href="#">See more</a>
      </p>
    </div>
    <div className="review-card">
      <img src="https://via.placeholder.com/50" alt="User" />
      <h3>Nicole Kamrass</h3>
      <p><strong>⭐ 5 stars</strong></p>
      <p>
        I have been getting meat, dairy, and eggs from Little Way Farm for
        over 3 years... <a href="#">See more</a>
      </p>
    </div>
    <div className="review-card">
      <h3>Social Proof Summary</h3>
      <p>
        Little Way Farm receives overwhelmingly positive reviews for their
        selection of items, quick delivery... <a href="#">See more</a>
      </p>
      <div className="social-icons">
        <span>💖</span>
        <span>😊</span>
        <span>+22</span>
      </div>
      <p>Based on 25 customer reviews</p>
    </div>
    <button className="arrow right">&gt;</button>
  </div>
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
