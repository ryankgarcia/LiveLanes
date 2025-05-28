import { Vehicle } from '../../data';
import './NextUpCard.css';

type Props = {
  entry: Vehicle;
};

export function NextUpCard({ entry }: Props) {
  return (
    <div className="nextUp-card-container">
      <div className="nextUp-card">
        <h3 className="nextUp-lane">{entry.laneLetter}</h3>
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
