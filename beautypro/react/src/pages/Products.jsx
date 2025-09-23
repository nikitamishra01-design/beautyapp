

// src/pages/Products.jsx
import React from 'react';
import './Products.css';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

function Products() {
  return (
    <div className="products">
      <h2>All Products</h2>
      <div className="product-grid">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
