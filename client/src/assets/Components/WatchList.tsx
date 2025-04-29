// type Props = {

// }

export function WatchList() {
  return (
    <div className="saved-searches">
      <h4>Watch List</h4>
      <input type="radio" name="filterBy" />
      {/* {savedFilters.map((filter, index) => (
        <label key={index}>
          <input
            type="radio"
            name="filterBy"
            onChange={() => onApplySavedFilter(filter)}
          />
          {filter.searchTerm || filter.filterType}
        </label>
      ))} */}
    </div>
  );
}
