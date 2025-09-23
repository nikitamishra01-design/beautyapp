
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleAddItem = () => {
    
    if (!name || !category || !price || !image) {
      alert("Please fill in all fields.");
      return;
    }

    const item = { name, category, price, image };

    const storedItems = JSON.parse(localStorage.getItem("itemsList")) || [];

    localStorage.setItem("itemsList", JSON.stringify([...storedItems, item]));

    setName("");
    setCategory("");
    setPrice("");
    setImage("");

    navigate("/item-list");
  };

  return (
    <div className="item-page">
      <h2>Add Item</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default Item;
