import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('/api/cart')
      .then(response => response.json())
      .then(data => setCart(data));
  }, []);

  const removeFromCart = (id) => {
    fetch(`/api/cart/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setCart(cart.filter(item => item.id !== id));
    });
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty</p>}
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
