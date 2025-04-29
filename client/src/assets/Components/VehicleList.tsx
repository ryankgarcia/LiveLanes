// import React, { useEffect, useState } from 'react';
import './VehicleCard.css';
import { Vehicle } from '../../data'; // this needs to import data.ts into this portion of the project
import { VehicleCard } from './VehicleCard';
// import { SavedFilter } from './SavedSearches'
// import { RunListContext } from './RunListContext';
// import { SavedSearches } from './SavedSearches';
// import { SavedFilter } from './types';

// type SavedFilter = {
//   filterType: string;
//   minPrice?: number;
//   maxPrice?: number;
//   searchTerm?: string;
// }

type Props = {
  entries: Vehicle[];
  distances: number[];
};

export type FilterProps = {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  onPriceChange: (e: React.FormEvent<HTMLFormElement>) => void;
  draftMinPrice: string;
  draftMaxPrice: string;
  setDraftMinPrice: (value: string) => void;
  setDraftMaxPrice: (value: string) => void;
};

export function VehicleList({ entries, distances }: Props) {
  // const [entries, setEntries] = useState<Vehicle[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<unknown>();
  // const [distances, setDistances] = useState<number[]>([]);
  // const [searchTerm, setSearchTerm] = useState('');
  // const [selectedFilter, setSelectedFilter] = useState('all'); // might need to change this to an empty string ''
  // const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  // const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  // const [draftMinPrice, setDraftMinPrice] = useState('');
  // const [draftMaxPrice, setDraftMaxPrice] = useState('');
  // const [savedSearch, setSavedSearch] = useState<SavedFilter[]>([]);
  // const [savedVehicles, setSavedVehicles] = useState<Vehicle[]>([]);

  // function handleFilterChange(filter: string) {
  //   setSelectedFilter(filter);
  // }
  // function handleFilterChange(value: string) {
  //   setSelectedFilter(value);
  // }

  // function handleSavedSearch(entry: Vehicle) {
  //   if (!savedVehicles.some((e) => e.vehicleId === entry.vehicleId)) {
  //     setSavedVehicles((prev) => [...prev, entry]);
  //   }
  // }

  // // this one works. bring it back in, if the other fails
  // // function handlePriceRange(e: React.FormEvent<HTMLFormElement>) {
  // //   e.preventDefault();
  // //   setMinPrice(draftMinPrice ? Number(draftMinPrice) : undefined);
  // //   setMaxPrice(draftMaxPrice ? Number(draftMaxPrice) : undefined);
  // //   setSelectedFilter('priceRange');
  // // }

  // // currently testing this one
  // function handlePriceRange(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   if (!draftMinPrice && !draftMaxPrice) {
  //     alert(
  //       'Please fill out at least a Min or Max value to filter by price range'
  //     );
  //     return;
  //   }
  //   setMinPrice(draftMinPrice ? Number(draftMinPrice) : undefined);
  //   setMaxPrice(draftMaxPrice ? Number(draftMaxPrice) : undefined);
  //   setSelectedFilter('priceRange');
  // }

  // // this is the work i am testing for savedSearch settings component
  // function handleSaveCurrentFilter() {
  //   const newSavedFilter: SavedFilter = {
  //     filterType: selectedFilter,
  //     minPrice,
  //     maxPrice,
  //     searchTerm,
  //   };
  //   const alreadyExists = savedSearch.some((filter) => {
  //     return (
  //       filter.filterType === newSavedFilter.filterType &&
  //       filter.minPrice === newSavedFilter.minPrice &&
  //       filter.maxPrice === newSavedFilter.maxPrice &&
  //       filter.searchTerm === newSavedFilter.searchTerm
  //     );
  //   });
  //   if (alreadyExists) {
  //     alert('You already saved this search');
  //     return;
  //   }
  //   setSavedSearch((prev) => [...prev, newSavedFilter]);
  // }

  // function handleApplySavedFilter(filter: SavedFilter) {
  //   setSelectedFilter(filter.filterType);
  //   setMinPrice(filter.minPrice);
  //   setMaxPrice(filter.maxPrice);
  //   setSearchTerm(filter.searchTerm || '');
  // }

  // // filteredCars approach 2 (WIP, this one is most accurate as of Sunday Apr 27)
  // const trimSearchTerm = searchTerm.trim().toLowerCase();
  // const filteredCars = entries.filter((term) => {
  //   const combinations = [
  //     `${term.make} ${term.model} ${term.year}`,
  //     `${term.make} ${term.year} ${term.model}`,
  //     `${term.model} ${term.year} ${term.make}`,
  //     `${term.model} ${term.make} ${term.year}`,
  //     `${term.year} ${term.model} ${term.make}`,
  //     `${term.year} ${term.make} ${term.model}`,
  //   ];
  //   return combinations.some((combo) =>
  //     combo.toLowerCase().includes(trimSearchTerm)
  //   );
  // });

  // let finalCars = [...filteredCars];

  // // the if statement below works but shows all vehicle cards. the goal is to get them to only show vehicle cards based on min&max range
  // // if (
  // //   selectedFilter === 'priceRange' &&
  // //   minPrice !== undefined &&
  // //   maxPrice !== undefined
  // // ) {
  // //   finalCars = finalCars.filter(
  // //     (car) =>
  // //       car.startingPrice >= Number(minPrice) &&
  // //       car.startingPrice <= Number(maxPrice)
  // //   );
  // //   finalCars.sort((a, b) => a.startingPrice - b.startingPrice);
  // // }

  // if (selectedFilter === 'priceRange') {
  //   finalCars = filteredCars.filter((car) => {
  //     const carPrice = car.startingPrice;
  //     const min = minPrice ? Number(minPrice) : 0;
  //     const max = maxPrice ? Number(maxPrice) : Infinity;
  //     return carPrice >= min && carPrice <= max;
  //   });
  // }

  // if (selectedFilter === 'priceLowHigh') {
  //   finalCars.sort((a, b) => a.startingPrice - b.startingPrice);
  // } else if (selectedFilter === 'priceHighLow') {
  //   finalCars.sort((a, b) => b.startingPrice - a.startingPrice);
  // } else if (selectedFilter === 'mileage') {
  //   finalCars.sort((a, b) => a.mileage - b.mileage);
  // }

  // // export this function into another component, then import it here to call it
  // function randomDistance(): number {
  //   const distanceArr = [
  //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  //   ];
  //   const randomIndex = Math.floor(Math.random() * distanceArr.length);
  //   const value = distanceArr[randomIndex];
  //   const result = Math.floor(value * Math.random() * 100);
  //   return Math.max(10, result);
  // }

  // // this useEffect was created to simulate distances from a seller dealership from where the buyer is from based on the buyer's address
  // useEffect(() => {
  //   const generatedDistances = entries.map(() => randomDistance());
  //   setDistances(generatedDistances);
  // }, [entries]);

  // this useEffect needs to make a call to the server to receive the entries
  // useEffect(() => {
  //   async function load() {
  //     try {
  //       const entries = await readVehicles();
  //       setEntries(entries);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   load();
  // }, []);

  // // the entries in the useEffect dependency array was added but just to check if no duplicate cards were create,
  // // else it stays empty, and was empty. delete this comment if it didn't work as planned

  // if (isLoading) return <div>Loading cars...</div>;
  // if (error) {
  //   return (
  //     <div>
  //       Error loading vehicles{' '}
  //       {error instanceof Error ? error.message : 'Unknown Error'}
  //     </div>
  //   );
  // }

  return (
    <div>
      {/* the savedSearches component needs to be updated to reflect a list of vehicle brands that the
user likes not just one vehicle, adding one vehicle to a favorites list should be its own component */}

      {/* <SearchBar searchTerm={searchTerm} onCustomChange={setSearchTerm} /> */}
      {/* import into a separate component */}
      {/* <Filters
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
        onPriceChange={handlePriceRange}
        draftMinPrice={draftMinPrice}
        draftMaxPrice={draftMaxPrice}
        setDraftMinPrice={setDraftMinPrice}
        setDraftMaxPrice={setDraftMaxPrice}
      /> */}
      {/* <SavedSearches
          savedFilters={savedSearch}
          onApplySavedFilter={handleApplySavedFilter}/> */}

      <div className="card-container">
        {entries.length > 0 ? (
          entries.map((entry, index) => (
            <VehicleCard
              key={entry.vehicleId}
              entry={entry}
              distance={distances[index]}
              // onSave={handleSavedSearch}
            />
          ))
        ) : (
          <div> No vehicles found. Try another search </div>
        )}
      </div>
    </div>
  );
}
