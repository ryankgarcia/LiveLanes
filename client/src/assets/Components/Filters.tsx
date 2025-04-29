import './Filters.css';

type FilterProps = {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  onPriceChange: (e: React.FormEvent<HTMLFormElement>) => void;
  draftMinPrice: string;
  draftMaxPrice: string;
  setDraftMinPrice: (value: string) => void;
  setDraftMaxPrice: (value: string) => void;
};

export function Filters({
  selectedFilter,
  onFilterChange,
  onPriceChange,
  draftMinPrice,
  draftMaxPrice,
  setDraftMaxPrice,
  setDraftMinPrice,
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
          <input
            className="range-box"
            type="number"
            placeholder="min"
            value={draftMinPrice}
            onChange={(e) => setDraftMinPrice(e.target.value)}
          />
          Min
          <input
            className="range-box"
            type="number"
            placeholder="max"
            value={draftMaxPrice}
            onChange={(e) => setDraftMaxPrice(e.target.value)}
          />
          Max
          <button className="custom-button">Search</button>
        </form>
        {/* <button onSubmit={SavedSearches} className="save-search-button">Save Search</button> */}
        {/* the button above on this statement should add to Save Searches component */}
      </div>
    </div>
  );
}
