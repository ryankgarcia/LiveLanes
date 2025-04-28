import React, { useEffect, useState } from 'react';
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
  const [selectedFilter, setSelectedFilter] = useState('all'); // might need to change this to an empty string ''
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [draftMinPrice, setDraftMinPrice] = useState('');
  const [draftMaxPrice, setDraftMaxPrice] = useState('');
  const [savedSearch, setSavedSearch] = useState<Vehicle[]>([]);

  // function handleFilterChange(filter: string) {
  //   setSelectedFilter(filter);
  // }
  function handleFilterChange(value: string) {
    setSelectedFilter(value);
  }

  function handleSavedSearch(entry: Vehicle) {
    if (!savedSearch.some((e) => e.vehicleId === entry.vehicleId)) {
      setSavedSearch((prev) => [...prev, entry]);
    }
  }

  function handlePriceRange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMinPrice(draftMinPrice ? Number(draftMinPrice) : undefined);
    setMaxPrice(draftMaxPrice ? Number(draftMaxPrice) : undefined);
    setSelectedFilter('priceRange');
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

  // the if statement below works but shows all vehicle cards. the goal is to get them to only show vehicle cards based on min&max range
  // if (
  //   selectedFilter === 'priceRange' &&
  //   minPrice !== undefined &&
  //   maxPrice !== undefined
  // ) {
  //   finalCars = finalCars.filter(
  //     (car) =>
  //       car.startingPrice >= Number(minPrice) &&
  //       car.startingPrice <= Number(maxPrice)
  //   );
  //   finalCars.sort((a, b) => a.startingPrice - b.startingPrice);
  // }

  if (selectedFilter === 'priceRange') {
    finalCars = filteredCars.filter((car) => {
      const carPrice = car.startingPrice;
      const min = minPrice ? Number(minPrice) : 0;
      const max = maxPrice ? Number(maxPrice) : Infinity;
      return carPrice >= min && carPrice <= max;
    });
  }

  if (selectedFilter === 'priceLowHigh') {
    finalCars.sort((a, b) => a.startingPrice - b.startingPrice);
  } else if (selectedFilter === 'priceHighLow') {
    finalCars.sort((a, b) => b.startingPrice - a.startingPrice);
  } else if (selectedFilter === 'mileage') {
    finalCars.sort((a, b) => a.mileage - b.mileage);
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
        onPriceChange={handlePriceRange}
        draftMinPrice={draftMinPrice}
        draftMaxPrice={draftMaxPrice}
        setDraftMinPrice={setDraftMinPrice}
        setDraftMaxPrice={setDraftMaxPrice}
        // testing this || statement out on this...if not give it its own prop
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
