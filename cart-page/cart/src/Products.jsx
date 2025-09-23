
import React from "react";
import "./App.css";


const productsData = [
  { id: 1, name: "Lipstick", price: 250, img: "/assets/lipstic.jpg" },
  { id: 2, name: "Foundation", price: 450, img: "/assets/facecram.avif" },
  { id: 3, name: "Perfume", price: 700, img: "/assets/perfume.webp" },
  { id: 4, name: "Nail Polish", price: 120, img: "/assets/nailpolish.webp" },
  { id: 5, name: "Muscsara", price: 120, img: "/assets/muscsara.jpg" },
  { id: 6, name: "New Product", price: 120, img: "/assets/new.webp" },
];

function Products({ cart, setCart }) {
  const addToCart = (product) => {
    const existing = cart.find((p) => p.id === product.id);
    if (existing) {
      setCart(cart.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p)));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="products-container">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} className="product-img" />
            <h2>{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
