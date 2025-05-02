import './VehicleCard.css';
import { MdOutlineHdrAuto, MdOutlineStar, MdStar } from 'react-icons/md';
import { Vehicle } from '../../data'; // this needs to import data.ts into this portion of the project

type VehicleCardProps = {
  entry: Vehicle;
  distance: number;
  onAddFavorite: (vehicle: Vehicle) => void;
  onRemoveFavorite: (vehicle: Vehicle) => void;
  isFavorite: boolean;
};

// this function exists to assign each vehicle in the auction a number and a letter
// that indicates the lane and number it will show up at
// needs to be worked out but this is the general idea
function laneAssign(): string[] {
  const laneAssignment: string[] = [];
  const laneLetter: string[] = ['a', 'b', 'c', 'd', 'e'];

  for (let i = 1; i < 51; i++) {
    const randomLaneIndex: number = Math.floor(
      Math.random() * laneLetter.length
    );
    const randomLaneLetter: string = laneLetter[randomLaneIndex];
    const lane = `${randomLaneLetter}${i}`;
    laneAssignment.push(lane);
  }
  return laneAssignment;
}

const genLane = laneAssign();
const newLane = genLane.map((item, index) => item[index]);

export function VehicleCard({
  entry,
  distance,
  onAddFavorite,
  onRemoveFavorite,
  isFavorite,
}: VehicleCardProps) {
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
          src={`images/2007-ford-mustang-black.jpg`} // this line should be receiving images from the server from the images directory and store the imgUrl in the database.
          alt={`${entry.year} ${entry.make} ${entry.model}`}
        />
        <div className="vehicle-info">
          <div className="vehicle-title">
            <span className="card-theme-font">{newLane}</span>
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
          {entry.startingPrice.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
          })}
        </div>
      </div>
      <div className="card-footer">
        <div className="button-container">
          <button className="bid-button">{<MdOutlineHdrAuto />} Set bid</button>
          <button
            className={isFavorite ? 'remove-button' : 'fav-button'}
            onClick={
              isFavorite
                ? () => onRemoveFavorite(entry)
                : () => onAddFavorite(entry)
            }>
            {isFavorite ? <MdStar /> : <MdOutlineStar />}
            {isFavorite ? 'Remove' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
}
