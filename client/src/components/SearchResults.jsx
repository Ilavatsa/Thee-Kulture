// src/components/SearchResults.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  // Logic to fetch and display search results based on the `query`
  // This can involve an API call to your backend or filtering a local list

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {/* Display the list of drinks based on the search query */}
    </div>
  );
};

export default SearchResults;