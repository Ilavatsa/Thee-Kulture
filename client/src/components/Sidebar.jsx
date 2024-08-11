import React, { useState } from 'react';
import './Sidebar.css';

const filters = {
  sale: ['All', 'On Sale', 'New Arrivals'],
  flavours: ['Spicy', 'Sweet', 'Bitter', 'Savory'],
  price: ['Under $10', '$10 - $20', '$20 - $30', 'Above $30'],
  origin: ['Local', 'Imported', 'Organic', 'Ethical']
};

const Sidebar = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    sale: 'All',
    flavours: [],
    price: 'All',
    origin: []
  });

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [category]: value
    }));
    if (onFilterChange) {
      onFilterChange(category, value);
    }
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Filters</h2>
      <ul className="filter-list">
        {Object.keys(filters).map((category) => (
          <li key={category} className="filter-category">
            <h3 className="filter-category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <ul className="filter-options">
              {filters[category].map((option) => (
                <li
                  key={option}
                  className={`filter-item ${selectedFilters[category] === option ? 'selected' : ''}`}
                  onClick={() => handleFilterChange(category, option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

