import React from 'react';
import '../styles/AppPage.css';

function App() {
  return (
    <div className="app-container">
      <div className="left-section">
        <h1>Design Your Perfect Day.</h1>
        <p>
          Get the best of health and fitness, all in one place. Download the app
          today!
        </p>
        <div className="buttons">
          <button className="app-store">Download on the App Store</button>
          <button className="google-play">Get it on Google Play</button>
        </div>
      </div>
      <div className="right-section">
        <div className="phone-container">
          <div className="feature">Exercise</div>
          <div className="feature">Sleep</div>
          <div className="feature">Music for Focus</div>
          <div className="feature">Meditation</div>
        </div>
      </div>
    </div>
  );
}

export default App;
