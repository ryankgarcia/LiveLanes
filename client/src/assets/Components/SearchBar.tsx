import { useState } from 'react';
import './SearchBar.css';
import { BsSearch } from 'react-icons/bs';

export function SearchBar() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="search-container">
      {inputValue === '' && <BsSearch className="search-icon" />}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search"
        className="search-bar"
      />
    </div>
  );
}
