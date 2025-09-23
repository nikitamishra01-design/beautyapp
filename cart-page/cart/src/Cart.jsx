
import React from "react";
import "./App.css";

function Cart({ cart, setCart }) {
  const addToCart = (product) => {
    setCart(cart.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p)));
  };

  const removeFromCart = (productId) => {
    setCart(
      cart
        .map((p) => (p.id === productId ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const totalPrice = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} className="product-img" />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price} x {item.qty}</p>
              </div>
              <div className="cart-buttons">
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>-</button>
              </div>
            </div>
          ))}
          <h2>Total: ₹{totalPrice}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;
