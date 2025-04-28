import './Filters.css';

type Props = {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  // searchTerm: string;
};

export function Filters({ selectedFilter, onFilterChange }: Props) {
  return (
    <div>
      <h4 className="header-text">Filter By</h4>
      <div className="saved-searches">
        <label>
          <input
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
            type="radio"
            value="autoBids"
            checked={selectedFilter === 'autoBids'}
            onChange={(e) => onFilterChange(e.target.value)}
            id="autoBids"
            name="filterBy"
          />
          Auto Bids
        </label>
      </div>
    </div>
  );
}
