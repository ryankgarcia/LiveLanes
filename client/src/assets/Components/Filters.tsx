import './Filters.css';

type FilterProps = {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  onPriceChange: (e: React.FormEvent<HTMLFormElement>) => void;
  draftMinPrice: string;
  draftMaxPrice: string;
  setDraftMinPrice: (value: string) => void;
  setDraftMaxPrice: (value: string) => void;
  onSaveFilter: () => void;
  onSearchNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // event handler passed as props so user can change their saved search name
  searchName: string; // this was added to make the change for user to type in their saved search name
};

export function Filters({
  selectedFilter,
  onFilterChange,
  onPriceChange,
  draftMinPrice,
  draftMaxPrice,
  setDraftMaxPrice,
  setDraftMinPrice,
  onSaveFilter,
  onSearchNameChange,
  searchName,
}: FilterProps) {
  return (
    <div>
      <h4 className="header-text">Filter By</h4>
      <div className="saved-searches">
        <label>
          <input
            className="custom-radio"
            type="radio"
            value="all"
            checked={selectedFilter === 'all'}
            onChange={(e) => onFilterChange(e.target.value)}
            id="all"
            name="filterBy"
          />
          All
        </label>
        <label>
          <input
            className="custom-radio"
            type="radio"
            value="priceLowHigh"
            checked={selectedFilter === 'priceLowHigh'}
            onChange={(e) => onFilterChange(e.target.value)}
            id="lowToHigh"
            name="filterBy"
          />
          Price: Lowest - Highest
        </label>
        <label>
          <input
            className="custom-radio"
            type="radio"
            value="priceHighLow"
            checked={selectedFilter === 'priceHighLow'}
            onChange={(e) => onFilterChange(e.target.value)}
            id="highToLow"
            name="filterBy"
          />
          Price: Highest - Lowest
        </label>
        <label>
          <input
            className="custom-radio"
            type="radio"
            value="mileage"
            checked={selectedFilter === 'mileage'}
            onChange={(e) => onFilterChange(e.target.value)}
            id="mileage"
            name="filterBy"
          />
          Mileage
        </label>
        <label>
          <input
            className="custom-radio"
            type="radio"
            value="autoBids"
            checked={selectedFilter === 'autoBids'}
            onChange={(e) => onFilterChange(e.target.value)}
            id="autoBids"
            name="filterBy"
          />
          Auto Bids
        </label>
        <form onSubmit={onPriceChange}>
          <label>
            <input
              className="custom-radio"
              type="radio"
              value="priceRange"
              checked={selectedFilter === 'priceRange'}
              onChange={(e) => onFilterChange(e.target.value)}
              name="filterBy"
            />
            Price Range:
          </label>
          <div>
            <input
              className="range-box"
              type="number"
              placeholder="Min"
              value={draftMinPrice}
              onChange={(e) => setDraftMinPrice(e.target.value)}
            />
            Min
            <input
              className="range-box"
              type="number"
              placeholder="Max"
              value={draftMaxPrice}
              onChange={(e) => setDraftMaxPrice(e.target.value)}
            />
            Max
          </div>
          <div>
            <button className="search-button">Search</button>
          </div>
        </form>
        <div>
          <input
            type="text"
            className="saved-search-box"
            placeholder="Name your search"
            value={searchName} // this was changed
            onChange={onSearchNameChange} // this was changed
          />
          <div>
            <button
              type="button"
              onClick={onSaveFilter}
              className="save-search-button">
              Save Search
            </button>
          </div>
        </div>
        {/* the button above on this statement should add to Save Searches component */}
      </div>
    </div>
  );
}
