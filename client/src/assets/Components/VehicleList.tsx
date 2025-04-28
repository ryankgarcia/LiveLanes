import { useEffect, useState } from 'react';
import './VehicleCard.css';
import { readVehicles, Vehicle } from '../../data'; // this needs to import data.ts into this portion of the project
import { VehicleCard } from './VehicleCard';
// import { SavedSearches } from './SavedSearches';
import { SearchBar } from './SearchBar';
import { Filters } from './Filters';

export function VehicleList() {
  const [entries, setEntries] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [distances, setDistances] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [savedSearch, setSavedSearch] = useState<Vehicle[]>([]);

  function handleFilterChange(filter: string) {
    setSelectedFilter(filter);
  }

  function handleSavedSearch(entry: Vehicle) {
    if (!savedSearch.some((e) => e.vehicleId === entry.vehicleId)) {
      setSavedSearch((prev) => [...prev, entry]);
    }
  }

  // filteredCars approach 2 (WIP, this one is most accurate as of Sunday Apr 27)
  const trimSearchTerm = searchTerm.trim().toLowerCase();
  const filteredCars = entries.filter((term) => {
    const combinations = [
      `${term.make} ${term.model} ${term.year}`,
      `${term.make} ${term.year} ${term.model}`,
      `${term.model} ${term.year} ${term.make}`,
      `${term.model} ${term.make} ${term.year}`,
      `${term.year} ${term.model} ${term.make}`,
      `${term.year} ${term.make} ${term.model}`,
    ];
    return combinations.some((combo) =>
      combo.toLowerCase().includes(trimSearchTerm)
    );
  });

  let finalCars = [...filteredCars];

  if (selectedFilter === 'priceLowHigh') {
    finalCars.sort((a, b) => a.reservePrice - b.reservePrice);
  } else if (selectedFilter === 'priceHighLow') {
    finalCars.sort((a, b) => b.reservePrice - a.reservePrice);
  } else if (selectedFilter === 'mileage') {
    finalCars.sort((a, b) => a.mileage - b.mileage);
  } else if (selectedFilter === 'saved') {
    finalCars = savedEntries;
  }

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

  // the entries in the useEffect dependency array was added but just to check if no duplicate cards were create,
  // else it stays empty, and was empty. delete this comment if it didn't work as planned

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
    <div>
      <SearchBar searchTerm={searchTerm} onCustomChange={setSearchTerm} />
      <Filters
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
      />
      {/* <SavedSearches savedSearch={savedSearch} setSavedSearch={handleSavedSearch} /> */}
      {/* the savedSearches component needs to be updated to reflect a list of vehicle brands that the
user likes not just one vehicle, adding one vehicle to a favorites list should be its own component */}

      <div className="card-container">
        {finalCars.length > 0 ? (
          finalCars.map((entry, index) => (
            <VehicleCard
              key={entry.vehicleId}
              entry={entry}
              distance={distances[index]}
              onSave={handleSavedSearch}
            />
          ))
        ) : (
          <div> No vehicles found. Try another search </div>
        )}
      </div>
      {/*
      <div className="card-container">
        {entries.map((entry, index) => (
          <VehicleCard
            key={entry.vehicleId}
            entry={entry}
            distance={distances[index]}
          />
        ))}
      </div>
      <Filters
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
      />
      {finalCars.map((car) => (
       <VehicleCard key={car.vin} entry={entry} />
      ))}
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
      <SavedSearches /> */}
    </div>
  );
}
