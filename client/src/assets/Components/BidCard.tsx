import './BidCard.css';
import { Vehicle } from '../../data';

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
  // distance: number;
};

//  distance is needed here to show the user how far away the car is from them
export function LiveAuctionCard({ entry }: Props) {
  return (
    <div className="auction-card">
      {/* {somewhere right here there must be a green bar that goes down counting the seconds} */}
      <div className="auction-card-header">
        <div className="time-bar">
          <span className="selling-price">{entry.startingPrice}</span>
          {/* this will change as people drive the price up during the auction, else it starts at starting price */}
          <span className="buying-dealer">
            Joe Sells Cars Outside of his dads garage
            {/* this needs to change as well, dynamically for current highest bidder */}
          </span>
        </div>
        {/* these two spans must be dynamically changed */}
      </div>
      <div className="auction-card-body">
        <img
          className="auction-vehicle-img"
          src={entry.imageUrl}
          alt={`${entry.year} ${entry.make} ${entry.model}`}
        />
        <button className="bid-btn">Bid</button>
      </div>
      <div className="auction-vehicle-info">
        <div>
          <span className="auction-lane">A23 {}</span>
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
    </div>
  );
}
