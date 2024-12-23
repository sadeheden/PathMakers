// AboutSection.jsx
import React from "react";
import "../styles/AboutUs.css"; // Make sure to create a CSS file with the styles provided

const AboutUs = () => {
  return (
    <section id="about-section">
      {/* About Left */}
      <div className="about-left">
        <img src="https://www.google.com/imgres?imgurl=https://i.pinimg.com/736x/f0/1d/6d/f01d6db70ce306de63ac7b4dd5c90417.jpg&tbnid=grc60oPrTKZ2KM&vet=1&imgrefurl=https://in.pinterest.com/pin/1098104321638407517/&docid=fPqVOKaBQZUP1M&w=580&h=380&hl=he&source=sh/x/im/m1/3&kgs=c1cad562aeb2d99eg" alt="About Img" />
      </div>

      {/* About Right */}
      <div className="about-right">
        <h4>our Story</h4>
        <h1>About Us</h1>
        <p>
        We are two passionate women creating an innovative travel website designed to turn your dream vacations into reality. Using cutting-edge AI technology, 
        we offer a seamless experience where you can plan every detail of your journey effortlessly.
        Whether you're looking for flights, hotels, or unique attractions, our platform has you covered. 
        Simply tell us your preferences, and our AI will craft a personalized itinerary tailored just for you.
        With our expertise and advanced tools,
        your next adventure starts here. Let us take the stress out of planning and give you the trip of a lifetime! 🌍✈️
        </p>
        <div className="address">
          <ul>
            <li>
              <span className="address-logo">
                <i className="fas fa-paper-plane"></i>
              </span>
              <p>Address</p>
              <span className="saprater">:</span>
              <p>london</p>
            </li>
            <li>
              <span className="address-logo">
                <i className="fas fa-phone-alt"></i>
              </span>
              <p>Phone No</p>
              <span className="saprater">:</span>
              <p>+91 987-654-4321</p>
            </li>
            <li>
              <span className="address-logo">
                <i className="far fa-envelope"></i>
              </span>
              <p>Email ID</p>
              <span className="saprater">:</span>
              <p>PathMakers@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="expertise">
          <h3>our Expertise</h3>
          <ul>
            <li>
              <span className="expertise-logo">
                <i className="fab fa-html5"></i>
              </span>
              <p>HTML</p>
            </li>
            <li>
              <span className="expertise-logo">
                <i className="fab fa-css3-alt"></i>
              </span>
              <p>CSS</p>
            </li>
            <li>
              <span className="expertise-logo">
                <i className="fab fa-node-js"></i>
              </span>
              <p>JavaScript</p>
            </li>
            <li>
              <span className="expertise-logo">
                <i className="fab fa-react"></i>
              </span>
              <p>React JS</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
