import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';
import { useState } from 'react';

type Props = {
  list: string[];
};

// this is the SearchableList component in shawn's class
// this component is the parent
export function SBFollowTest({ list }: Props) {
  const [value, setValue] = useState('');

  const quotes = list.filter((quote) =>
    quote.toLowerCase().includes(value.toLowerCase())
  );
  // this handle change must take the parameter of newValue because it is what the user
  // will be changing
  // quotes represents the list
  function handleChange(newValue: string) {
    setValue(newValue);
  }

  return (
    <div className="search-container">
      <SearchBar value={value} onCustomChange={handleChange} />
      <Items items={quotes} />
    </div>
  );
}

// the newValue is the parameter we passed into the
type SearchBarProps = {
  value: string;
  onCustomChange: (newValue: string) => void;
};

function SearchBar({ value, onCustomChange }: SearchBarProps) {
  return (
    <>
      {<BsSearch className="search-icon" />}
      <input
        type="text"
        value={value}
        // this onCustomChange is linked to line 24
        onChange={(e) => onCustomChange(e.target.value)}
        placeholder="Search"
        className="search-bar"
      />
    </>
  );
}

type ItemProps = {
  items: string[];
};

function Items({ items }: ItemProps) {
  if (items.length === 0) {
    return <h3>No items match your search results</h3>;
  }
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
