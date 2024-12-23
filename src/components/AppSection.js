import React from "react";
import "../styles/AppPage.css";

const AppSection = () => {
  return (
    <section className="app-section">
      <div className="app-content">
        <h2>Join the App Revolution</h2>
        <p>
          Download the app to manage your jobs on the go, connect with top
          freelancers, and stay updated with the latest opportunities.
        </p>
        <div className="app-buttons">
          <button className="btn-appstore">Get it on App Store</button>
          <button className="btn-playstore">Get it on Google Play</button>
        </div>
      </div>

      <div className="app-image">
        <img
          src="https://via.placeholder.com/300x500"
          alt="App Mockup"
          className="app-mockup"
        />
      </div>
    </section>
  );
};

export default AppSection;
