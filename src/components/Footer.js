import React from "react";
import "../styles/footer.css"; // Ensure this CSS file exists

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>PATHMAKERS</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">App</a></li>
       
          </ul>
        </div>
        <div className="footer-column">
          <h4>OUR SERVICES</h4>
          <ul>
            <li><a href="#">Contact</a></li>
            <li><a href="#">App</a></li>
            <li><a href="#">Chat</a></li>
          </ul>
        </div>
    
        <div className="footer-column">
          <h4>CONTACT</h4>
          <ul>
            <li><a href="#">Contact Information</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Socal media</a></li>
          </ul>
        </div>
        <div className="footer-column">
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 - PathMakers| All Rights Reserved</p>
        <p>
      All rights reserved to us.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
