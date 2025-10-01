
import React from "react";
import "./App.css";

const CartPage = ({ cart, setCart }) => {
  const removeItem = (id) => setCart(cart.filter(item => item.id !== id));
  const clearCart = () => setCart([]);
  const increaseQty = (id) =>
    setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  const decreaseQty = (id) =>
    setCart(
      cart
        .map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item)
        .filter(item => item.qty > 0)
    );

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} style={{ marginBottom: '15px' }}>
              <img src={item.image} alt={item.name} width="80" />
              <div><strong>{item.name}</strong> | ₹{item.price * item.qty}</div>
              <div>
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span style={{ margin: "0 5px" }}>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
              <button onClick={() => removeItem(item.id)}>Remove</button>
              <hr />
            </div>
          ))}

          <p><strong>Total: ₹{total}</strong></p>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
