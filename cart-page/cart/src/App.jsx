
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";

function App() {
  // Cart state + localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <nav className="nav">
        <Link to="/products">Products</Link> |{" "}
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>

      <Routes>
        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="*" element={<Navigate to="/products" />} />
      </Routes>
    </Router>
  );
}

export default App;
