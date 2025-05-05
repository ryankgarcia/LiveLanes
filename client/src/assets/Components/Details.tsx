import { Vehicle } from '../../data'; // this needs to import data.ts into this portion of the project

// type Vehicle = {
//   vehicleId?: number;
//   vin: string;
//   year: number;
//   make: string;
//   model: string;
//   trim: string;
//   bodyType: string;
//   exteriorColor: string;
//   interiorColor: string;
//   transmission: string;
//   engine: string;
//   fuelType: string;
//   mileage: number;
//   sellerName: string;
//   conditionReport: string;
//   damages: string;
//   startingPrice: number;
// };

type Props = {
  entry: Vehicle;
  // imageUrl: string;
  // vehicleId?:
};

export function Details({ entry }: Props) {
  return (
    <div className="details-view-container">
      <img
        src={entry.imageUrl}
        alt={`${entry.make} ${entry.model} ${entry.year}`}
      />
      <div>{entry.mileage}</div>
      <div>{entry.vin}</div>
    </div>
  );
}
