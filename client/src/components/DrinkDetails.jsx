import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DrinkDetails = () => {
  const { id } = useParams();
  const [drink, setDrink] = useState(null);

  useEffect(() => {
    fetch(`/api/drinks/${id}`)
      .then(response => response.json())
      .then(data => setDrink(data));
  }, [id]);

  if (!drink) {
    return <div>Loading...</div>;
  }

  const addToCart = () => {
    fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(drink),
    }).then(() => alert('Added to cart'));
  };

  return (
    <div className="drink-details">
      <img src={drink.image} alt={drink.name} />
      <h2>{drink.name}</h2>
      <p>{drink.description}</p>
      <p>${drink.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default DrinkDetails;
