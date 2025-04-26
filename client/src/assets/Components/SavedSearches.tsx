import './SavedSearches.css';

export function SavedSearches() {
  return (
    <div>
      <h4>Saved Searches</h4>
      <div className="saved-searches">
        <label>
          <input type="radio" id="option1" name="userSavedSearch" />
          Joe's Favorite Cars
        </label>
        <label>
          <input type="radio" id="option2" name="userSavedSearch" />
          SUV Top Sellers
        </label>
        <label>
          <input type="radio" id="option3" name="userSavedSearch" />
          Sedan Favorites
        </label>
      </div>
    </div>
  );
}
