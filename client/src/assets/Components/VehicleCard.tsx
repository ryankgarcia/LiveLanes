import './VehicleCard.css';
import { MdOutlineHdrAuto, MdOutlineStar } from 'react-icons/md';
import { Vehicle } from '../../data'; // this needs to import data.ts into this portion of the project

type Props = {
  entry: Vehicle;
  distance: number;
};

export function VehicleCard({ entry, distance }: Props) {
  return (
    <div className="card" key={entry.vehicleId}>
      <div className="card-header">
        <span className="distance">{distance} mi away</span>
        <span className="dealer">{entry.sellerName}</span>
      </div>
      <hr />
      <div className="card-body">
        <img
          className="vehicle-img"
          // src={`images/${}.jpg`} // this should be calling the database now. just need to figure out the proper path to connect the correct photos and data
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
        {/* the vehicle needs to show the starting bid price, you can swap it out for the reservePrice, when complete add to the database table */}
      </div>
      <div className="card-footer">
        <div className="button-container">
          <button className="bid-button">{<MdOutlineHdrAuto />} Set bid</button>
          <button className="fav-button">{<MdOutlineStar />} Add</button>
        </div>
      </div>
    </div>
  );
}
