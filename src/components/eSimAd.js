import React from "react";
import "../styles/eSimAd.css";


const eSimAd = () => {
  const handleClick = () => {
    alert("Thank you for joining us!");
  };

  return (
    <div className="container">
      <div className="text">
        <h1>THE WORLD HAS MOVED TO eSIM.</h1>
        <p>
          YOUR CONSUMERS ARE READY.<br />WE ARE READY.
        </p>
        <button className="btn" onClick={handleClick}>
          Join Us
        </button>
      </div>
      <div className="image">
        <img
          className="chip"
          src="chip_image_placeholder.png"
          alt="SIM card chip"
        />
        <div className="drones">
          <img src="drone_placeholder.png" alt="Drone" />
        </div>
        <img
          className="cityscape"
          src="cityscape_placeholder.png"
          alt="Cityscape"
        />
      </div>
    </div>
  );
};

export default eSimAd;
