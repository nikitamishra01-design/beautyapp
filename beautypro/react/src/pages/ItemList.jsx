
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ItemList.css";

const ItemList = () => {
  const [itemsList, setItemsList] = useState([]);
  const navigate = useNavigate();

  // Load items from localStorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("itemsList")) || [];
    setItemsList(storedItems);
  }, []);

  // Delete item
  const handleDelete = (index) => {
    const updatedList = itemsList.filter((_, i) => i !== index);
    setItemsList(updatedList);
    localStorage.setItem("itemsList", JSON.stringify(updatedList));
  };

  // Navigate to Add Item page
  const handleAddItem = () => {
    navigate("/item");
  };

  // Add to cart
  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((cartItem) => cartItem.id === item.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...item, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="item-list-page">
      <h2>Item List</h2>

      <div className="items-grid">
        {itemsList.length === 0 ? (
          <p>No items added yet!</p>
        ) : (
          itemsList.map((item, index) => (
            <div key={index} className="item-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Category: {item.category}</p>
              <p>Price: ₹{item.price}</p>

              <button
                style={{ color: "black", backgroundColor: "pink" }}
                className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <br />
              <br />

              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>

      <button
        className="add-item-btn"
      
      
        onClick={handleAddItem}
      >
        Add New Item
      </button>
    </div>
  );
};

export default ItemList;
