
import React from "react";
import { Link } from "react-router-dom";
import "./ProductPage.css";
const products = [
  { id: 1, name: "Luxury Matte Lipstick - Red", price: 1299, image: "/assets/lipstic1.jfif", desc: "Rich matte red shade with long-lasting wear.", category: "makeup" },
  { id: 2, name: "Luxury Matte Lipstick - Nude", price: 1299, image: "/assets/lipstic1.jfif", desc: "Elegant nude shade for daily wear.", category: "makeup" },
  { id: 3, name: "Luxury Matte Lipstick - Pink", price: 1299, image: "/assets/lipstic1.jfif", desc: "Vibrant pink shade with smooth matte finish.", category: "makeup" },
  { id: 4, name: "Premium Hydrating Face Cream", price: 1999, image: "/assets/facewash.jfif", desc: "Deeply nourishes skin with premium natural extracts.", category: "skincare" },
  { id: 5, name: "Waterproof Designer Eyeliner", price: 999, image: "/assets/eyeliner.png", desc: "Smudge-proof luxury eyeliner for bold glamorous eyes.", category: "makeup" },
  { id: 6, name: "Royal Nude Nail Polish", price: 799, image: "/assets/nailpolish1.jfif", desc: "Premium glossy nude shade with long-lasting formula.", category: "makeup" },
  { id: 7, name: "Vitamin C Brightening Serum", price: 2999, image: "/assets/serium.jfif", desc: "Advanced serum with Vitamin C for glowing skin.", category: "skincare" },
  { id: 8, name: "Charcoal Detox Clay Mask", price: 1499, image: "/assets/facemask.jfif", desc: "Premium activated charcoal mask for deep pore cleansing.", category: "skincare" },
  { id: 9, name: "Rose Gold Hydrating Toner", price: 1299, image: "/assets/rose.jfif", desc: "Hydrating toner with real rose extracts and gold essence.", category: "skincare" },
  { id: 10, name: "Aloe Refresh Skin Toner", price: 1399, image: "/assets/tonner.jfif", desc: "Refreshing aloe-based toner for glowing and smooth skin.", category: "skincare" },
  { id: 11, name: "Bluetooth Headphones", price: 2999, image: "/assets/headphones.jfif", desc: "High quality wireless headphones.", category: "electronic" },
  { id: 12, name: "headphone", price: 2999, image: "/assets/image.png", desc: "High quality wireless headphones.", category: "electronic" }

];


function ProductsPage() {
  return (
    <div className="products-page">
      <h2>All Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
               <p>{product.category}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
