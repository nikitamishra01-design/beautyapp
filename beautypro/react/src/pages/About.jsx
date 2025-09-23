
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-text">
          <h1>About GlowUp</h1>
          <p>
            GlowUp is your go-to online beauty store, offering premium skincare,
            makeup, and self-care essentials.
          </p>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Promise</h2>
        <div className="value-grid">
          <div className="value-card">
            <h3>Premium Products</h3>
            <p>We curate the best beauty brands that are safe and effective.</p>
            <Link to="/premium">
              <button className="value-btn">Learn More</button>
            </Link>
          </div>

          <div className="value-card">
            <h3>Add your product</h3>
            <p>Your satisfaction and beauty journey is our top priority.</p>
            <Link to="/item">
              <button className="value-btn">Learn More</button>
            </Link>
          </div>

          <div className="value-card">
            <h3>Clean Beauty</h3>
            <p>Our products are cruelty-free, clean, and conscious.</p>
            <Link to="/clean-beauty">
              <button className="value-btn">Learn More</button>
              <Link to="/premium-products">

</Link>

            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
