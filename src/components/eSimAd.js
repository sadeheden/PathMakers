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
           className="cityscape"
           src="https://itpweb.s3.eu-west-1.amazonaws.com/istnew%2Ftourist+esim+internet+turkey+istanbul+%283%29.jpg"
           alt="Cityscape"
        />
        <div className="drones">
          <img src="https://cheapsim.co.il/wp-content/uploads/2024/05/%D7%A2%D7%95%D7%9C%D7%9D-2-8.webp" alt="Drone" />
        </div>
        <img
           className="chip"
          src="https://simtop.co.il/wp-content/uploads/2023/05/esim.png"
          alt="SIM card chip"
        />
      </div>
    </div>
  );
};

export default eSimAd;
