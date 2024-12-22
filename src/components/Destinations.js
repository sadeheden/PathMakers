import React from "react";

const Destinations = () => (
  <section className="destinations">
    <div className="destination-grid">
      <div className="destination-card" style={{ backgroundImage: "url('/images/kelingking.jpg')" }}>
        <h3>Kelingking Beach</h3>
        <p>Bali, Indonesia</p>
      </div>
      <div className="destination-card" style={{ backgroundImage: "url('/images/grandpalace.jpg')" }}>
        <h3>Grand Palace</h3>
        <p>Thailand</p>
      </div>
      <div className="destination-card" style={{ backgroundImage: "url('/images/cappadocia.jpg')" }}>
        <h3>Cappadocia</h3>
        <p>Turkey</p>
      </div>
      <div className="destination-card" style={{ backgroundImage: "url('/images/padar.jpg')" }}>
        <h3>Padar Island</h3>
        <p>East Nusa Tenggara</p>
      </div>
    </div>
  </section>
);

export default Destinations;
