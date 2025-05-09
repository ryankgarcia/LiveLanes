import './VehicleCard.css';
import { Vehicle } from '../../data'; // this needs to import data.ts into this portion of the project
import { VehicleCard } from './VehicleCard';

export type FilterProps = {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  onPriceChange: (e: React.FormEvent<HTMLFormElement>) => void;
  draftMinPrice: string;
  draftMaxPrice: string;
  setDraftMinPrice: (value: string) => void;
  setDraftMaxPrice: (value: string) => void;
};

type Props = {
  entries: Vehicle[];
  distances: number[];
  onAddFavorite: (vehicle: Vehicle) => void;
  onRemoveFavorite: (vehicle: Vehicle) => void;
  favorites: Vehicle[];
  // this one will be reserved for lanes
};

// this one will be reserved for lanes pass it in here as props
export function VehicleList({
  entries,
  distances,
  onAddFavorite,
  onRemoveFavorite,
  favorites,
}: Props) {
  return (
    <div>
      <div className="card-container">
        {entries.length > 0 ? (
          entries.map((entry, index) => (
            <VehicleCard
              key={entry.vehicleId}
              entry={entry}
              distance={distances[index]}
              onAddFavorite={onAddFavorite}
              onRemoveFavorite={onRemoveFavorite}
              isFavorite={favorites.some(
                (v) => v.vehicleId === entry.vehicleId
              )}
            />
          ))
        ) : (
          <div>
            You have not added any vehicles to your Watch List yet . . .
          </div>
        )}
      </div>
    </div>
  );
}
