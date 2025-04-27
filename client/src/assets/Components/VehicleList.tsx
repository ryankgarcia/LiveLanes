import { useEffect, useState } from 'react';
import './VehicleCard.css';
import { readVehicles, Vehicle } from '../../data'; // this needs to import data.ts into this portion of the project
import { VehicleCard } from './VehicleCard';
import { SavedSearches } from './SavedSearches';
import { Filters } from './Filters';
// import { SBFollowTest } from './SBFollowTest';
import { SearchBar } from './SearchBar';

// pretend this is the data from the fetch call
// const list = [
//   ' 2008 Ford F150',
//   '2012 honda civic',
//   '2019 subaru impreza',
//   '2015 nissan sentra',
// ];

export function VehicleList() {
  const [entries, setEntries] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [distances, setDistances] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
  //   setSearchTerm(e.target.value);
  // }
  const filteredCars = entries.filter(
    (term) =>
      term.model.toLowerCase().includes(searchTerm.toString().toLowerCase()) ||
      term.make.toLowerCase().includes(searchTerm.toString().toLowerCase()) ||
      term.year.toString().includes(searchTerm.toString().toLowerCase())
  );

  // export this function into another component, then import it here to call it
  function randomDistance(): number {
    const distanceArr = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    const randomIndex = Math.floor(Math.random() * distanceArr.length);
    const value = distanceArr[randomIndex];
    const result = Math.floor(value * Math.random() * 100);
    return Math.max(10, result);
  }

  // this useEffect was created to simulate distances from a seller dealership from where the buyer is from based on the buyer's address
  useEffect(() => {
    const generatedDistances = entries.map(() => randomDistance());
    setDistances(generatedDistances);
  }, [entries]);

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
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <>
      <div className="card-container">
        {entries.map((entry, index) => (
          <VehicleCard
            key={entry.vehicleId}
            entry={entry}
            distance={distances[index]}
          />
        ))}
      </div>
      <Filters />
      <SearchBar searchTerm={searchTerm} onCustomChange={setSearchTerm} />
      {filteredCars.length === 0 ? (
        <h3>Sorry, no items match your search result</h3>
      ) : (
        filteredCars.map((entry) => (
          <VehicleCard
            key={entry.vehicleId}
            entry={entry}
            distance={entry.mileage}
          />
        ))
      )}
      {/* <SBFollowTest list={list} /> */}
      <SavedSearches />
    </>
  );
}
