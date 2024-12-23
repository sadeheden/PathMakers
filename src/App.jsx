import React from "react";
import Hero from "./components/Hero";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer"; // Import the Footer component
import ESimAd from "./components/eSimAd";
import AboutUs from "./AboutUs";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="Hero">
        {/* Hero is always displayed */}
        <Hero />
      <Routes>
        {/* Define other routes */}
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

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
            <img src="https://www.masa.co.il/wp-content/uploads/2019/04/nature.jpg" alt="Amazon" />
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOcEFe0xr7mtuVdHhmdui2p7k908-KxhZdZg&s" alt="USA" />
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

      {/* Reviews Section */}
      <ReviewsSection />

      <div className="eSimAd-wrapper">
        <ESimAd /> {/* רכיב ה-eSimAd הוסף כאן */}
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
