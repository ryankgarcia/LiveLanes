import './SearchBar.css';
import { BsSearch } from 'react-icons/bs';

type Props = {
  searchTerm: string;
  onCustomChange: (newSearchTerm: string) => void;
};

export function SearchBar({ searchTerm, onCustomChange }: Props) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onCustomChange(e.target.value)}
        placeholder="Search"
      />
      {searchTerm === '' && <BsSearch className="search-icon" />}
    </div>
  );
}
