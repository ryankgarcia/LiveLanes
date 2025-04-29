import './SavedSearches.css';

type SavedFilter = {
  filterType: string;
  minPrice?: number;
  maxPrice?: number;
  searchTerm?: string;
};

type SavedSearchesProps = {
  savedFilters: SavedFilter[];
  onApplySavedFilter: (filter: SavedFilter) => void;
  // searchName: string; // might need to remove this
  // onSearchNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // might need to remove this same with the props being passed into component
};

// removed searchName, onSearchNameChange from being passed in here in the argument.
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
          <input
            type="radio"
            name="userSavedSearch"
            onChange={() => onApplySavedFilter(filter)}
          />
          {filter.searchTerm}
          {/* {filter.searchTerm || filter.filterType} */}
        </label>
      ))}
    </div>
  );
}
