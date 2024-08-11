// src/pages/BasketPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext'; // Adjust the import path if needed

const BasketPage = () => {
  const { cart } = useCart(); // Destructure cart from useCart

  if (!cart) {
    return <div>Loading...</div>; // Handle loading or undefined state
  }

  return (
    <div>
      <h1>Your Basket</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}</li> // Adjust to match your item structure
        ))}
      </ul>
    </div>
  );
};

export default BasketPage;


