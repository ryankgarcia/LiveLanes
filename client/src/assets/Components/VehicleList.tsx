import './VehicleCard.css';
import { Vehicle } from '../../data'; // this needs to import data.ts into this portion of the project
import { VehicleCard } from './VehicleCard';

type Props = {
  entries: Vehicle[];
  distances: number[];
  onAddFavorite: (vehicle: Vehicle) => void;
};

export type FilterProps = {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  onPriceChange: (e: React.FormEvent<HTMLFormElement>) => void;
  draftMinPrice: string;
  draftMaxPrice: string;
  setDraftMinPrice: (value: string) => void;
  setDraftMaxPrice: (value: string) => void;
};

export function VehicleList({ entries, distances, onAddFavorite }: Props) {
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
            />
          ))
        ) : (
          <div> No vehicles found. Try another search </div>
        )}
      </div>
    </div>
  );
}
