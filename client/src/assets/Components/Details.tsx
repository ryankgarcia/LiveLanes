import { Vehicle } from '../../data'; // this needs to import data.ts into this portion of the project
import './Details.css';

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
      <div className="details-flex-row">
        <div className="details-column-full">
          <span className="details-image-span">{entry.laneLetter}</span>
          <span className="details-image-span">{entry.year}</span>
          <span className="details-image-span">{entry.make}</span>
          <span className="details-image-span">{entry.model}</span>
          <img
            className="details-image-open"
            src={entry.imageUrl}
            alt={`${entry.make} ${entry.model} ${entry.year}`}
          />
          <span className="details-image-span">{entry.mileage}</span>
          <span className="details-image-span">{entry.vin}</span>
        </div>
      </div>
      <div className="details-squares-container">
        <div className="detail-squares">{entry.fuelType}</div>
        <div className="detail-squares">{entry.engine}</div>
        <div className="detail-squares">{entry.transmission}</div>
        <div className="detail-squares">{entry.bodyType}</div>
        <div className="detail-squares">{entry.year}</div>
        <div className="detail-squares">{entry.make}</div>
        <div className="detail-squares">{entry.model}</div>
        <div className="detail-squares">{entry.trim}</div>
        <div className="detail-squares">{entry.interiorColor}</div>
        <div className="detail-squares">{entry.exteriorColor}</div>
      </div>
    </div>
  );
}
