import { Vehicle } from '../../data'; // this needs to import data.ts into this portion of the project
import { VehicleCard } from './VehicleCard';
import './VehicleCard.css';
import './WatchList.css';

type Props = {
  // onAddFavorite: (vehicle: Vehicle) => void;
  entries: Vehicle[];
  distances: number[];
};

export function WatchList({ entries, distances }: Props) {
  return (
    <div className="saved-favorites">
      <h4>Watch List</h4>
      <label>
        <input type="radio" name="filterBy" className="custom-radio" />
        Favorites
      </label>
      <div className="card-container">
        {entries.length > 0 ? (
          entries.map((entry, index) => (
            <VehicleCard
              key={entry.vehicleId}
              entry={entry}
              distance={distances[index]}
              onAddFavorite={() => entry}
            />
          ))
        ) : (
          <div> You have not added any vehicles to your watchlist. </div>
        )}
        {/* {if(<VehicleCard />)} */} // make edits to this to show vehicle card
        with a 'remove' fav button text instead of add
      </div>
    </div>
  );
}
