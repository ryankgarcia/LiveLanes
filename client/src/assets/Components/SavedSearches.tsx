import './SavedSearches.css';
import { SavedFilter } from './types';

type SavedSearchesProps = {
  savedFilters: SavedFilter[];
  onApplySavedFilter: (filter: SavedFilter) => void;
};

export function SavedSearches({
  savedFilters,
  onApplySavedFilter,
}: SavedSearchesProps) {
  return (
    <div className="saved-searches">
      <h4>Saved Searches</h4>

      {/* <input
        type="text"
        value={searchName}
        onChange={onSearchNameChange}
        placeholder="Name your search"
        name="filterBy"
      /> */}
      {savedFilters.map((filter, index) => (
        <label key={index}>
          <div onClick={() => onApplySavedFilter(filter)}>{filter.name}</div>
          {/* <input
            type="radio"
            name="userSavedSearch"
            onChange={() => onApplySavedFilter(filter)}
          /> */}
          {/* {filter.searchTerm || filter.filterType} */}
        </label>
      ))}
    </div>
  );
}
