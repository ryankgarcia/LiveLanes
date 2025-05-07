import './BidCard.css';
import { Vehicle } from '../../data';
import { useState } from 'react';

// export type Vehicle = {
//   vehicleId?: number;
//   laneLetter: string; // assign it here in run list right after you read them
//   laneIndex: number; // assign it here in run list right after you read them
//   year: number;
//   make: string;
//   model: string;
//   mileage: number;
//   sellerName: string;
//   startingPrice: number;
//   reservePrice: number;
//   imageUrl: string;
// };

type Props = {
  entry: Vehicle;
  bid: number;
  onPlaceBid: () => void;
  onSelect: () => void;
  isAuctionLive: boolean;
  // distance: number;
};

//  distance is needed here to show the user how far away the car is from them
export function LiveAuctionCard({
  entry,
  bid,
  onPlaceBid,
  onSelect,
  isAuctionLive,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // the following 3 states control the timer functionality of the auction

  // function handleLastBids() {
  //   if (!isAuctionLive) {
  //     setIsAuctionLive(true);
  //     setTimer((prev) => (prev <= 5 ? 7 : prev));
  //     onHandleProceedBid()
  //   }
  // }

  function onBidClick() {
    if (!isAuctionLive) return;
    setIsModalOpen(true);
  }

  function onHandleProceedBid() {
    onPlaceBid();
    setIsModalOpen(false);
  }

  return (
    <div key={entry.vehicleId} className="auction-card">
      {/* {somewhere right here there must be a green bar that goes down counting the seconds} */}
      <div className="auction-card-header">
        {/* <div
          key={timer}
          className={`time-bar ${isAuctionLive ? 'active' : ''}`}
          style={{ animationDuration: `${timer}s` }}> */}
        {/* <span style={{ color: 'white', fontWeight: 'bold' }}>{timer}s</span> */}
        <span className="selling-price">${`${bid}`}</span>
        <span className="buying-dealer">
          Joe Sells Cars Outside of his dads garage
          {/* this needs to change dynamically for current highest bidder */}
        </span>
        {/* </div> */}
      </div>
      <div className="auction-card-body">
        {/* <div className="countdown"></div> */}
        <img
          onClick={onSelect}
          className="auction-vehicle-img"
          src={entry.imageUrl}
          alt={`${entry.year} ${entry.make} ${entry.model}`}
        />
        <button className="bid-btn" onClick={onBidClick}>
          Bid
        </button>
      </div>
      <div className="auction-vehicle-info">
        <div>
          <span className="auction-lane">A23 {}</span>
          {/* this auction lane span needs to account for the individual lane assignments */}
          <span className="auction-vehicle-year-make">
            {' '}
            {entry.year} {} {entry.make}
          </span>
        </div>
        <span className="auction-vehicle-model">{entry.model}</span>
        <div>
          <span className="auction-vehicle-mileage">{entry.mileage} mi</span>
        </div>
      </div>
      <div className="auction-card-footer">
        <span className="final-line">CA, 102 mi away</span>
        {/* need to figure out how to get the distances here */}
      </div>
      {isModalOpen && (
        <div className="bidCard-modal">
          <div className="modal-row">
            <div className="modal-column">
              {/* <div className="bidCard-modal-3d">
              <div className="card-modal-content"> */}
              <h3>Are you sure you want to place your bid?</h3>
              <button
                className="bidCard-confirmButton"
                onClick={() => onHandleProceedBid()}>
                Confirm
              </button>
              <button
                className="bidCard-cancelButton"
                onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
