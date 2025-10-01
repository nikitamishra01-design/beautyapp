
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Products = ({ cart, setCart }) => {
  const navigate = useNavigate(); 

  const products = [
    {
      id: 1,
      name: "Matte Liquid Lipstick",
      price: 499,
      image: "/assets/lipstic.jpg",
      desc: "Long-lasting matte finish lipstick with a smooth texture.",
      category: "Lipstick"
    },
    {
      id: 2,
      name: "Hydrating Face Cream",
      price: 899,
      image: "/assets/facecram.avif",
      desc: "Deeply nourishes and moisturizes dry skin with aloe vera.",
      category: "Skincare"
    },
    {
      id: 3,
      name: "Waterproof Eyeliner",
      price: 299,
      image: "/assets/muscsara.jpg",
      desc: "Smudge-proof and waterproof liner for bold eyes all day.",
      category: "Eye Makeup"
    },
    {
      id: 4,
      name: "Volumizing Mascara",
      price: 399,
      image: "/assets/mascara.jpg",
      desc: "Adds volume and length to your lashes.",
      category: "Eye Makeup"
    },
      {
    id: 4,
    name: "Floral Perfume Spray",
    price: 1199,
    image: "/assets/perfume.webp",
    desc: "Elegant floral fragrance that lasts 12+ hours.",
    category: "Fragrance"
  },
  {
    id: 5,
    name: "Nude Nail Polish",
    price: 249,
    image: "/assets/nailpolish.webp",
    desc: "Glossy nude polish with long-stay formula.",
    category: "Nail"
  },
  {
    id: 6,
    name: "Vitamin C Serum",
    price: 999,
    image: "/assets/perfume.webp",
    desc: "Brightens skin tone and reduces dark spots.",
    category: "Skincare"
  },
  {
    id: 7,
    name: "Makeup Remover Wipes",
    price: 199,
    image: "/assets/nailpolish.webp",
    desc: "Gentle wipes that remove all makeup and impurities.",
    category: "Skincare"
  },
  {
    id: 8,
    name: "Charcoal Face Mask",
    price: 349,
    image: "/assets/lipstic.avif",
    desc: "Detoxifies and clears pores with activated charcoal.",
    category: "Skincare"
  },
  {
    id: 9,
    name: "Rose Water Toner",
    price: 399,
    image: "/assets/facecram.avif",
    desc: "Hydrating toner that refreshes and balances skin.",
    category: "skincare"
  }
]
  
  const addToCart = async (product) => {
    
    const existing = cart.find(item => item.id === product.id);
    let newCart;
    if (existing) {
      newCart = cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
    } else {
      newCart = [...cart, { ...product, qty: 1 }];
    }
    setCart(newCart);

    
    try {
      await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...product, qty: 1 })
      });
      console.log("Product added to backend cart");
    } catch (error) {
      console.error("Error adding to backend:", error);
    }


    navigate("/cart");
  };

  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: '20px' }}>
          <img src={product.image} alt={product.name} width="150" />
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Products;
