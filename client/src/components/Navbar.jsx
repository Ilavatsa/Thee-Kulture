import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to the search results page with the search query as a parameter
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="a7995fc5-f4b2-4078-8fdf-8428947f817d.jpeg" alt="Logo" />
      </div>
      <div className="navbar-search">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
      <div className="navbar-links">
        <Link to="/wishlist" className="nav-item">Wishlist</Link>
        <Link to="/account" className="nav-item">My Account</Link>
        <Link to="/basket" className="nav-item">Checkout</Link>
      </div>
      <div className="navbar-cart">
        <Link to="/basket">
          <FaShoppingCart size={24} className="cart-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
