// import { MdOutlineSavedSearch } from 'react-icons/md';
import { Vehicle } from '../../data';
import './SavedSearches.css';

type Props = {
  entries: Vehicle;
  handleSavedSearch: (entry: Vehicle) => void;
};

export function SavedSearches({ entries, handleSavedSearch }: Props) {
  return (
    <div>
      <h4>Saved Searches</h4>
      <div className="saved-searches">
        <label>
          <input
            type="radio"
            value="saved"
            checked={entries === 'saved'}
            onChange={(e) => handleSavedSearch(e.target.value)}
            id="userSavedList1"
            name="userSavedSearch"
          />
          {/* this input should add a filtered list of the user's favorite's search
          which will represent a group of their favorite types of vehicles */}
          Joe's Favorite Cars
        </label>
      </div>
    </div>
  );
}
