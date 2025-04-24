import { useEffect, useState } from 'react';
import './VehicleCard.css';
import { MdOutlineHdrAuto, MdOutlineStar } from 'react-icons/md';
import '..data.ts'; // this needs to import data.ts into this portion of the project

export function VehicleCard() {
  const [entries, setEntries] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  // this useEffect needs to make a call to the server to receive the entries
  useEffect(() => {
    async function load() {
      try {
        const entries = await readVehicles();
        setEntries(entries);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  if (isLoading) return <div>Loading cars...</div>;
  if (error) {
    return (
      <div>
        Error loading vehicles{' '}
        {error instanceof Error ? Error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <span className="distance">26 mi away</span>
        <span className="dealer">Bill Hart Wholesale LLC.</span>
      </div>
      <hr />
      <div className="card-body">
        <img
          className="vehicle-img"
          src="/car-images/2007-ford-mustang-black.jpeg"
          alt="vehicle image"
        />
        <div className="vehicle-info">
          <div className="vehicle-title">
            <span className="card-theme-font">C88</span>
            <span className="vehicle-model">2004 GMC</span>
          </div>
          <div className="vehicle-model">Sierra 1500</div>
          <div className="vehicle-mileage">158,999 mi</div>
        </div>
        <div className="vehicle-price">$1,500</div>
      </div>
      <div className="card-footer">
        <button className="bid-button"> {<MdOutlineHdrAuto />} Set bid</button>
        <button className="fav-button">{<MdOutlineStar />} Add</button>
      </div>
    </div>
  );
}
