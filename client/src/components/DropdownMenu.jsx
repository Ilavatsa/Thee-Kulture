import React, { useState } from 'react';
import './DropdownMenu.css'; // Ensure this file exists for styling

const DropdownMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const categories = {
    Beers: ['Lager', 'IPA', 'Stout'],
    Whisky: ['Scotch', 'Bourbon', 'Rye'],
    Wines: ['Red', 'White', 'Rose'],
    Spirits: ['Vodka', 'Rum', 'Tequila'],
    Snacks: ['Chips', 'Nuts', 'Pretzels'],
    Mixers: ['Soda', 'Tonic', 'Juice'],
    Extras: ['Ice', 'Garnish', 'Stirrers'],
  };

  return (
    <div className="dropdown-menu">
      <div className="category-buttons">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className="category-button"
            onClick={() => setActiveCategory(activeCategory === category ? null : category)}
          >
            {category}
          </button>
        ))}
      </div>
      {activeCategory && (
        <div className="dropdown-content">
          <h3>{activeCategory}</h3>
          <ul>
            {categories[activeCategory].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;



