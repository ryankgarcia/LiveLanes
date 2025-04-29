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
};

export function SavedSearches({
  savedFilters,
  onApplySavedFilter,
}: SavedSearchesProps) {
  return (
    <div className="saved-searches">
      <h4>Saved Searches</h4>
      {savedFilters.map((filter, index) => (
        <label key={index}>
          <input
            type="radio"
            name="userSavedSearch"
            onChange={() => onApplySavedFilter(filter)}
          />
          {filter.searchTerm || filter.filterType}
        </label>
      ))}
    </div>
  );
}
