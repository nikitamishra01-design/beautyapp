
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import PremiumProducts from "./pages/PremiumProducts";
import Premium from "./pages/Premium";
import UserData from "./pages/UserData";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ItemList from "./pages/ItemList";
import Item from "./pages/Item.JSX";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/premium-products" element={<PremiumProducts />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/user-data" element={<UserData />} />

            
            <Route path="/item" element={<Item />} />
            <Route path="/item-list" element={<ItemList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
