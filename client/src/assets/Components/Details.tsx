import { Vehicle } from '../../data'; // this needs to import data.ts into this portion of the project
import { formatUSD } from './AuxilaryFunctions';
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
  bid: number;
};

export function Details({ entry, timeout, bid }: Props) {
  return (
    <div className="details-view-container">
      <div className="details-image-column-full">
        <div className="greenBar-Timer">
          {timeout !== undefined ? `00m ${timeout}s` : ''}
          <span className="details-bidding-dealer-name">
            {/* is this logic breaking DRY */}
            {timeout !== undefined
              ? formatUSD(entry.startingPrice + (bid - entry.startingPrice))
              : formatUSD(entry.startingPrice)}
          </span>
        </div>
        <div className="details-image-layout">
          <div className="details-image-flex-row">
            <div className="details-image-column-left">
              <span className="p-lane">{entry.laneLetter.toUpperCase()}</span>
            </div>
          </div>
          <div className="details-image-flex-row">
            <div className="details-image-column-left">
              <span className="p-year">{entry.year}</span>
            </div>
            <div className="details-image-column-left">
              <span className="p-make">{entry.make}</span>
            </div>
            <div className="details-image-column-left">
              <span className="p-model">{entry.model}</span>
            </div>
          </div>
        </div>
        <img
          className="details-image-open"
          src={entry.imageUrl}
          alt={`${entry.make} ${entry.model} ${entry.year}`}
        />
        <div className="vin-div">
          <p> VIN: {entry.vin}</p>
        </div>
        <div className="reports-div">
          <p>
            <span className="span">Damages:</span> {entry.damages}
          </p>
        </div>
        <div className="reports-div">
          <p>
            <span className="span">Condition Report:</span>
            {entry.conditionReport}
          </p>
        </div>
        <div className="reports-div">
          <p>
            <span className="span">Seller:</span> {entry.sellerName}
          </p>
        </div>
        <div className="new-details">
          <div>
            <div className="detail-squares">
              <span className="span">Year</span> {entry.year}
            </div>
            <div className="detail-squares">
              <span className="span">Make</span> {entry.make}
            </div>
            <div className="detail-squares">
              <span className="span">Model</span> {entry.model}
            </div>
            <div className="detail-squares">
              <span className="span">Trim</span> {entry.trim}
            </div>
          </div>
          <div>
            <div className="details-column-full">
              <div className="detail-squares">
                <span className="span">Engine</span> {entry.engine}
              </div>
              <div className="detail-squares">
                <span className="span">Interior Color</span>
                {entry.interiorColor}
              </div>
              <div className="detail-squares">
                <span className="span">Exterior</span> {entry.exteriorColor}
              </div>
              <div className="detail-squares">
                <span className="span">Transmission</span> {entry.transmission}
              </div>
            </div>
          </div>
          <div>
            <div className="details-column-full">
              <div className="detail-squares">
                <span className="span">Fuel Type</span>
                {entry.fuelType}
              </div>
              <div className="detail-squares">
                <span className="span">Body Type</span>
                {entry.bodyType}
              </div>
              <div className="detail-squares">
                <span className="span">Mileage</span>
                {entry.mileage.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
