import './BidCard.css';

export function LiveAuctionCard() {
  return (
    <div className="auction-card">
      {/* {somewhere right here there must be a green bar that goes down counting the seconds} */}
      <div className="auction-card-header">
        <div className="time-bar">
          <span className="selling-price">$8,900</span>
          <span className="buying-dealer">
            Joe Sells Cars Outside of his dads garage
          </span>
        </div>
        {/* these two spans must be dynamically changed */}
      </div>
      <div className="auction-card-body">
        <img
          className="auction-vehicle-img"
          src="/images/2012-nissan-kicks-black.jpg"
          alt="a vehicle image here.."
        />
        <button className="bid-btn">Bid</button>
      </div>
      <div className="auction-vehicle-info">
        <div>
          <span className="auction-lane">A23 {}</span>
          <span className="auction-vehicle-year-make">2016 Toyota </span>
        </div>
        <span className="auction-vehicle-model">Prius III Hybrid</span>
        <div>
          <span className="auction-vehicle-mileage">113,765 mi</span>
        </div>
      </div>
      <div className="auction-card-footer">
        <span className="final-line">CA, 113 mi away</span>
      </div>
    </div>
  );
}
