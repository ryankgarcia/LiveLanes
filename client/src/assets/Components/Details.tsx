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
  timeout: number | undefined;
  // imageUrl: string;
  // vehicleId: Vehicle;
};

export function Details({ entry, timeout }: Props) {
  return (
    <div className="details-view-container">
      <div className="details-image-flex-row">
        <div className="details-image-column-full">
          <div
            className="greenBar-Timer"
            // style={{ animationDuration: `${timeout[entry.vehicleId]}s` }}
          >
            {timeout !== undefined ? `00m ${timeout}s` : ''}
            <span className="details-bidding-dealer-name">Dealer Name</span>
            <span className="details-bidding-dealer-name">
              Current Highest bid $
            </span>
          </div>
          <div className="details-image-span">
            <div className="details-image-flex-row">
              <div className="details-image-column-left">
                <span>{entry.laneLetter}</span>
              </div>
              <span className="details-image-span">{entry.year}</span>
            </div>
          </div>
          {/* comment this back in and finish the css later */}
          {/* <span className="details-image-span">{entry.make}</span>
          <span className="details-image-span">{entry.model}</span>
          <span className="details-image-span">{entry.mileage}</span>
          <span className="details-image-span">{entry.vin}</span> */}
          <img
            className="details-image-open"
            src={entry.imageUrl}
            alt={`${entry.make} ${entry.model} ${entry.year}`}
          />

          <div className="details-flex-row">
            <div className="details-column-full">
              <div className="detail-squares"> Year {entry.year}</div>
              <div className="detail-squares"> Make {entry.make}</div>
              <div className="detail-squares"> Model {entry.model}</div>
              <div className="detail-squares"> Trim {entry.trim}</div>
            </div>
            <div className="details-flex-row">
              <div className="details-column-full">
                <div className="detail-squares"> Engine {entry.engine}</div>
                <div className="detail-squares">
                  Interior Color {entry.interiorColor}
                </div>
                <div className="detail-squares">
                  Exterior {entry.exteriorColor}
                </div>
                <div className="detail-squares">
                  Transmission {entry.transmission}
                </div>
              </div>
            </div>
            <div className="details-flex-row">
              <div className="details-column-full">
                <div className="detail-squares">Fuel Type{entry.fuelType}</div>
                <div className="detail-squares">Body Type{entry.bodyType}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
