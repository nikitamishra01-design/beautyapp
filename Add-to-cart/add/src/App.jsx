
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./Products";
import CartPage from "./CartPage";

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px", fontWeight: "bold" }}>Products</Link>
          <Link to="/cart" style={{ fontWeight: "bold" }}>Cart ({cart.length})</Link>
        </nav>

        
        <Routes>
          <Route path="/" element={<Products cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
