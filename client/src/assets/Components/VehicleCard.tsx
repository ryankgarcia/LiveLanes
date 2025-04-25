import { useEffect, useState } from 'react';
import './VehicleCard.css';
import { MdOutlineHdrAuto, MdOutlineStar } from 'react-icons/md';
import { readVehicles, Vehicle } from '../../data'; // this needs to import data.ts into this portion of the project

export function VehicleCard() {
  const [entries, setEntries] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  // this useEffect needs to make a call to the server to receive the entries
  useEffect(() => {
    async function load() {
      try {
        const entries = await readVehicles();
        setEntries(entries);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  if (isLoading) return <div>Loading cars...</div>;
  if (error) {
    return (
      <div>
        Error loading vehicles{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="card-container">
      {/* changed the above from a fragment to a div to test out if the cards can be placed in a container for separation */}
      {entries.map((entry) => (
        <div className="card" key={entry.vehicleId}>
          <div className="card-header">
            <span className="distance">26 mi away</span>
            {/* this line above needs to show the distance the seller is from the buyer...assume one location for the buyer */}
            <span className="dealer">{entry.sellerName}</span>
          </div>
          <hr />
          <div className="card-body">
            <img
              className="vehicle-img"
              src={`/car-images/${entry.vin}.jpg`} // this should be calling the database now. just need to figure out the proper path to connect the correct photos and data
              alt={`${entry.year} ${entry.make} ${entry.model}`}
            />
            <div className="vehicle-info">
              <div className="vehicle-title">
                <span className="card-theme-font">C88</span>
                {/* this line above needs to show a random letter & number which resembles the line and number the car will appear during live auction */}
                <span className="vehicle-model">
                  {entry.year} {} {entry.make}
                </span>
              </div>
              <div className="vehicle-model">{entry.model}</div>
              <div className="vehicle-mileage">
                {entry.mileage.toLocaleString()} mi
              </div>
            </div>
            <div className="vehicle-price">
              {entry.reservePrice.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              })}
            </div>
            {/* the line above here needs to show the starting bid price, you can swap it out for the startingBid price, which needs to get added to the database table */}
          </div>
          <div className="card-footer">
            <div className="button-container">
              <button className="bid-button">
                {<MdOutlineHdrAuto />} Set bid
              </button>
              <button className="fav-button">{<MdOutlineStar />} Add</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
