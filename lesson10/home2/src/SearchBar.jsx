import React from 'react';

const SearchBar = ({ filterText, onFilterTextChange, inStockOnly, onInStockChange }) => {
  return (
    <form>
      <input type="text" placeholder="Search..." value={filterText} onChange={onFilterTextChange} />
      <p>
        <input type="checkbox" checked={inStockOnly} onChange={onInStockChange} />
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
