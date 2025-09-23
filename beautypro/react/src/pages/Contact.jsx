// src/pages/Contact.jsx
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether it's a query or feedback.</p>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> support@beautyapp.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> 123 Glow Street, Mumbai, India</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
