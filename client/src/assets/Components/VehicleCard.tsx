import './VehicleCard.css';
import { MdOutlineStar, MdStar } from 'react-icons/md';
import { Vehicle } from '../../data';

type VehicleCardProps = {
  entry: Vehicle;
  distance: number;
  onAddFavorite: (vehicle: Vehicle) => void;
  onRemoveFavorite: (vehicle: Vehicle) => void;
  isFavorite: boolean;
};

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
          src={entry.imageUrl}
          alt={`${entry.year} ${entry.make} ${entry.model}`}
        />
        <div className="vehicle-info">
          <div className="vehicle-title">
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
  );
}
