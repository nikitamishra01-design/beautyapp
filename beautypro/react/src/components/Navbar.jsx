
// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">GlowUp</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">🛒</Link></li>
        <Link to="/premium-products">
  <button className="value-btn" style={{ color: "white" }}>login</button>
</Link>


       
       
      </ul>
    </nav>
  );
}

export default Navbar;
