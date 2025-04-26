import './Filters.css';

export function Filters() {
  return (
    <div>
      <h4 className="header-text">Filter By</h4>
      <div className="saved-searches">
        <label>
          <input type="radio" id="option1" name="filterBy" />
          All
        </label>
        <label>
          <input type="radio" id="option2" name="filterBy" />
          Price: Lowest - Highest
        </label>
        <label>
          <input type="radio" id="option3" name="filterBy" />
          Price: Highest - Lowest
        </label>
        <label>
          <input type="radio" id="option3" name="filterBy" />
          Mileage
        </label>
        <label>
          <input type="radio" id="option3" name="filterBy" />
          Auto Bids
        </label>
      </div>
    </div>
  );
}
