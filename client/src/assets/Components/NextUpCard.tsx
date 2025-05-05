import './NextUpCard.css';
import { Vehicle } from '../../data';

// export type Vehicle = {
//   vehicleId?: number;
//   laneLetter: string; // assign it here in run list right after you read them
//   laneIndex: number; // assign it here in run list right after you read them
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
//   reservePrice: number;
//   imageUrl: string;
// };

type Props = {
  entry: Vehicle;
};

export function NextUpCard({ entry }: Props) {
  return (
    <div className="nextUp-card-container">
      <div className="nextUp-card">
        <h3 className="nextUp-lane">A13</h3>
        {/* when you figure how to add lane assignments, you put that in the line below this one */}
        <div className="nextUp-card-body">
          <span className="nextUp-vehicle-year-make">
            {entry.year} {entry.make}
          </span>
          <span className="nextUp-vehicle-model"> {entry.model}</span>
        </div>
      </div>
    </div>
  );
}
