// import { useEffect, useState } from 'react';
// import { readVehicles, Vehicle } from '../../data'; // this needs to import data.ts into this portion of the project
// import { VehicleList } from '../Components/VehicleList';
// import { SearchBar } from '../Components/SearchBar';
// import { Filters } from '../Components/Filters';
// import { SavedFilter } from '../Components/types';
// import { randomDistance } from '../Components/AuxilaryFunctions';

// export function RunList() {
//   const [entries, setEntries] = useState<Vehicle[]>([]); // controls initial state of the Vehicle data being pulled by API call
//   const [isLoading, setIsLoading] = useState(false); // lets user know the page is loading
//   const [error, setError] = useState<unknown>(); // useEffect error handler
//   const [distances, setDistances] = useState<number[]>([]); // useEffect to create
//   const [searchTerm, setSearchTerm] = useState(''); // part of searchbar component
//   const [selectedFilter, setSelectedFilter] = useState('all'); // might need to change this to an empty string ''
//   const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
//   const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
//   const [draftMinPrice, setDraftMinPrice] = useState('');
//   const [draftMaxPrice, setDraftMaxPrice] = useState('');
//   const [savedSearch, setSavedSearch] = useState<SavedFilter[]>([]);
//   const [savedVehicles, setSavedVehicles] = useState<Vehicle[]>([]);

//   function handleFilterChange(value: string) {
//     setSelectedFilter(value);
//   }

//   function handleSavedSearch(entry: Vehicle) {
//     if (!savedVehicles.some((e) => e.vehicleId === entry.vehicleId)) {
//       setSavedVehicles((prev) => [...prev, entry]);
//     }
//   }

//   // this handler is needed to sort by price min - max values
//   function handlePriceRange(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     if (!draftMinPrice && !draftMaxPrice) {
//       alert(
//         'Please fill out at least a Min or Max value to filter by price range'
//       );
//       return;
//     }
//     setMinPrice(draftMinPrice ? Number(draftMinPrice) : undefined);
//     setMaxPrice(draftMaxPrice ? Number(draftMaxPrice) : undefined);
//     setSelectedFilter('priceRange');
//   }

//   // this is the work i am testing for savedSearch settings component
//   function handleSaveCurrentFilter() {
//     const newSavedFilter: SavedFilter = {
//       filterType: selectedFilter,
//       minPrice,
//       maxPrice,
//       searchTerm,
//     };
//     const alreadyExists = savedSearch.some((filter) => {
//       return (
//         filter.filterType === newSavedFilter.filterType &&
//         filter.minPrice === newSavedFilter.minPrice &&
//         filter.maxPrice === newSavedFilter.maxPrice &&
//         filter.searchTerm === newSavedFilter.searchTerm
//       );
//     });
//     if (alreadyExists) {
//       alert('You already saved this search');
//       return;
//     }
//     setSavedSearch((prev) => [...prev, newSavedFilter]);
//   }

//   function handleApplySavedFilter(filter: SavedFilter) {
//     setSelectedFilter(filter.filterType);
//     setMinPrice(filter.minPrice);
//     setMaxPrice(filter.maxPrice);
//     setSearchTerm(filter.searchTerm || '');
//   }

//   // this is used to filter cars by searchTerm in the SearchBar component
//   const trimSearchTerm = searchTerm.trim().toLowerCase();
//   const filteredCars = entries.filter((term) => {
//     const combinations = [
//       `${term.make} ${term.model} ${term.year}`,
//       `${term.make} ${term.year} ${term.model}`,
//       `${term.model} ${term.year} ${term.make}`,
//       `${term.model} ${term.make} ${term.year}`,
//       `${term.year} ${term.model} ${term.make}`,
//       `${term.year} ${term.make} ${term.model}`,
//     ];
//     return combinations.some((combo) =>
//       combo.toLowerCase().includes(trimSearchTerm)
//     );
//   });

//   let finalCars = [...filteredCars];

//   // this conditional statement is used to filter cars by price range
//   if (selectedFilter === 'priceRange') {
//     finalCars = filteredCars.filter((car) => {
//       const carPrice = car.startingPrice;
//       const min = minPrice ? Number(minPrice) : 0;
//       const max = maxPrice ? Number(maxPrice) : Infinity;
//       return carPrice >= min && carPrice <= max;
//     });
//   }

//   // this conditional statement represents the different options the user can sort the available vehicles by
//   if (selectedFilter === 'priceLowHigh') {
//     finalCars.sort((a, b) => a.startingPrice - b.startingPrice);
//   } else if (selectedFilter === 'priceHighLow') {
//     finalCars.sort((a, b) => b.startingPrice - a.startingPrice);
//   } else if (selectedFilter === 'mileage') {
//     finalCars.sort((a, b) => a.mileage - b.mileage);
//   }

//   // this useEffect was created to simulate distances from a seller dealership from where the buyer is from based on the buyer's address
//   useEffect(() => {
//     const generatedDistances = entries.map(() => randomDistance());
//     setDistances(generatedDistances);
//   }, [entries]);

//   useEffect(() => {
//     async function load() {
//       try {
//         const entries = await readVehicles();
//         setEntries(entries);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     load();
//   }, []);

//   // the entries in the useEffect dependency array was added but just to check if no duplicate cards were create,
//   // else it stays empty, and was empty. delete this comment if it didn't work as planned

//   if (isLoading) return <div>Loading cars...</div>;
//   if (error) {
//     return (
//       <div>
//         Error loading vehicles{' '}
//         {error instanceof Error ? error.message : 'Unknown Error'}
//       </div>
//     );
//   }
//   return (
//     <div className="run-list-page">
//       <div className="search-bar-container">
//         <SearchBar searchTerm={searchTerm} onCustomChange={setSearchTerm} />
//       </div>

//       <div className="filter-section">
//         <div className="saved-searches">{/* <SavedSearches /> */}</div>
//         <div className="filters">
//           <Filters
//             selectedFilter={selectedFilter}
//             onFilterChange={handleFilterChange}
//             onPriceChange={handlePriceRange}
//             draftMinPrice={draftMinPrice}
//             draftMaxPrice={draftMaxPrice}
//             setDraftMinPrice={setDraftMinPrice}
//             setDraftMaxPrice={setDraftMaxPrice}
//           />
//         </div>
//       </div>

//       <div className="vehicle-card-list">
//         <VehicleList entries={finalCars} distances={distances} />
//       </div>
//     </div>
//   );
// }
