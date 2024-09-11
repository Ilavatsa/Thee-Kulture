// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DrinksList from './components/DrinksList';
import DrinkDetails from './components/DrinkDetails';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import DropdownMenu from './components/DropdownMenu'; // Ensure this is imported
import Sidebar from './components/Sidebar';
import SearchResults from './components/SearchResults';
import WishlistPage from './pages/WishlistPage';
import AccountPage from './pages/AccountPage';
import CheckoutPage from './pages/CheckoutPage';
import BasketPage from './pages/BasketPage'; 
import './App.css'; // Ensure this file exists for general styling

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <DropdownMenu /> {/* DropdownMenu now directly below Navbar */}
        <div className="main-layout">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<DrinksList />} />
              <Route path="/drink/:id" element={<DrinkDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/basket" element={<BasketPage />} />
              <Route path="/search" element={<SearchResults />} />
              {/* Add other routes as needed */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
