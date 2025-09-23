
// src/pages/Home.jsx
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

function Home() {
  const featured = products.slice(0, 4); // show 4 featured products

  return (
    <div className="home">
      <div className="hero">
        <img src="/assets/banner.jpg" alt="Beauty Banner" />
        <div className="hero-text">
          <h1>GlowUp with Confidence</h1>
          <p>Shop top beauty & skincare essentials</p>
          <Link to="/products"><button>Explore Products</button></Link>
        </div>
      </div>

      <section className="featured">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featured.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
