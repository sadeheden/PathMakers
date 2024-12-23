import React from "react";
import "../styles/footer.css"; // Ensure this CSS file exists

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>ANATEK YAPI</h4>
          <ul>
            <li><a href="#">bout us</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>OUR SERVICES</h4>
          <ul>
            <li><a href="#">Scaffold Installation and Dismantling</a></li>
            <li><a href="#">Sales and Rental</a></li>
            <li><a href="#">Inspection</a></li>
            <li><a href="#">Consulting</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>BLOG</h4>
          <ul>
            <li><a href="#">News</a></li>
            <li><a href="#">Files</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>CONTACT</h4>
          <ul>
            <li><a href="#">Contact Information</a></li>
            <li><a href="#">References</a></li>
          </ul>
        </div>
        <div className="footer-column">
      
          <div className="social-icons">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 - Eden and May</p>
        <p>
      All rights reserved to us.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
