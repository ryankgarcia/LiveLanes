import { Vehicle } from '../../data';
import { useState } from 'react';
import { formatUSD } from './AuxilaryFunctions';
import './BidCard.css';

type Props = {
  entry: Vehicle;
  bid: number;
  onPlaceBid: () => void;
  onSelect: () => void;
  isAuctionLive: boolean;
  timeouts: { [vehicleId: number]: number };
  distance: number;
};

export function LiveAuctionCard({
  entry,
  bid,
  onPlaceBid,
  onSelect,
  isAuctionLive,
  timeouts,
  distance,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function onBidClick() {
    if (!isAuctionLive) return;
    setIsModalOpen(true);
    if (timeouts[entry.vehicleId] <= 0 || undefined) {
      setIsModalOpen(false);
      return;
    }
  }

  function onHandleProceedBid() {
    onPlaceBid();
    setIsModalOpen(false);
  }

  function locationAssignment() {
    const location: string[] = ['CA', 'OR', 'WA', 'TX', 'KS', 'PA'];
    for (let i = 0; i < location.length; i++) {
      if (600 >= distance) {
        location[i] = 'CA';
      } else if (750 >= distance) {
        location[i] = 'OR';
      } else if (900 >= distance) {
        location[i] = 'WA';
      } else if (1200 >= distance) {
        location[i] = 'TX';
      } else if (1500 >= distance) {
        location[i] = 'KS';
      } else if (2400 >= distance) {
        location[i] = 'PA';
      }
      return location[i];
    }
  }

  return (
    <div key={entry.vehicleId} className="auction-card">
      <div className="auction-card-header">
        <span className="selling-price">{formatUSD(bid)}</span>
        <span className="selling-dealer">{entry.sellerName}</span>
      </div>
      <div className="auction-card-body">
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
          <span className="auction-lane">{entry.laneLetter.toUpperCase()}</span>
          <span className="auction-vehicle-year-make">
            {entry.year} {} {entry.make}
          </span>
        </div>
        <span className="auction-vehicle-model">{entry.model}</span>
        <div>
          <span className="auction-vehicle-mileage">
            {entry.mileage.toLocaleString()} mi
          </span>
        </div>
      </div>
      <div className="auction-card-footer">
        <span className="final-line">
          {locationAssignment()}, {distance} mi away
        </span>
      </div>
      {isModalOpen && (
        <div className="bidCard-modal">
          <div className="modal-row">
            <div className="modal-column">
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
