import './BidCard.css';

export function LiveAuctionCard() {
  return (
    <div className="auction-card">
      <div className="auction-card-header">
        <span className="selling-price">$8,900</span>
        <span className="buying-dealer">Joe Sells Cars</span>
        <div className="auction-card-body">
          <img
            // className="auction-vehicle-img"
            className="auction-vehicle-img"
            src="/images/2012-nissan-kicks-black.jpg"
            alt="a vehicle image here.."
          />
          <button className="bid-btn">Bid</button>
        </div>
      </div>
    </div>
  );
}
