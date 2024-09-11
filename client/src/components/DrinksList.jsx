import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DrinksList = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch('/api/drinks')
      .then(response => response.json())
      .then(data => setDrinks(data));
  }, []);

  return (
    <div className="drinks-list">
      {drinks.map(drink => (
        <div key={drink.id} className="card">
          <img src={drink.image} alt={drink.name} />
          <h2>{drink.name}</h2>
          <p>{drink.description}</p>
          <p>${drink.price}</p>
          <Link to={`/drink/${drink.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default DrinksList;
