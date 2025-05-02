import { Vehicle } from '../../data'; // this needs to import data.ts into this portion of the project
import { VehicleCard } from './VehicleCard';
import './VehicleCard.css';
import './WatchList.css';

type Props = {
  entries: Vehicle[];
  distances: number[];
  onRemoveFavorite: (vehicleId: number) => void;
};

export function WatchList({
  entries,
  distances,
  onRemoveFavorite,
  favorites,
}: Props) {
  return (
    <div className="saved-favorites">
      {/* <h4>Watch List</h4>
      <label>
        <input type="radio" name="filterBy" className="custom-radio" />
        Favorites
      </label> */}
      <div className="card-container">
        {entries.length > 0 ? (
          favorites.map((entry, index) => (
            <VehicleCard
              key={entry.vehicleId}
              entry={entry}
              distance={distances[index]}
              onClick={
                favorites.some((v) => v.vehicleId === entry.vehicleId)
                  ? () => onRemoveFavorite(favorites.vehicleId)
                  : () => onAddFavorite(entry)
              }
              onRemoveFavorite={() => onRemoveFavorite}
              // () => entry}
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

// onClick={
//   isFavorite
//     ? () => onRemoveFavorite(favorites.vehicleId)
//     : () => onAddFavorite(entry)
// }>
// {isFavorite ? <MdStar /> : <MdOutlineStar />}
// {isFavorite ? 'Remove' : 'Add'}
