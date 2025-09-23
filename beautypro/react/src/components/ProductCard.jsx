
// src/components/ProductCard.jsx
import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({ id, name, price, image ,  category }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>₹{price}</p>
         <p>{category}</p>
      <Link to={`/product/${id} `}>
        <button>View</button>
      </Link>
    </div>
  );
}

export default ProductCard;