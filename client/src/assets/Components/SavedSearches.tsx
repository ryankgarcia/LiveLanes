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
      {savedFilters.map((filter, index) => (
        <label key={index}>
          <div onClick={() => onApplySavedFilter(filter)}>{filter.name}</div>
        </label>
      ))}
    </div>
  );
}
