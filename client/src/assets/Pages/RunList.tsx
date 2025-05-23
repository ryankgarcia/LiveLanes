import { useEffect, useState } from 'react';
import {
  readFavorites,
  readVehicles,
  Vehicle,
  writeFavorites,
  writeSavedFavorites,
  readSavedFavorites,
} from '../../data';
import { VehicleList } from '../Components/VehicleList';
import { SearchBar } from '../Components/SearchBar';
import { Filters } from '../Components/Filters';
import { SavedFilter } from '../Components/types.ts';
import { randomDistance } from '../Components/AuxilaryFunctions';
import { SavedSearches } from '../Components/SavedSearches';
import './RunListLayout.css';

export function RunList() {
  const [entries, setEntries] = useState<Vehicle[]>([]); // controls initial state of the Vehicle data being pulled by API call
  const [isLoading, setIsLoading] = useState(false); // lets user know the page is loading
  const [error, setError] = useState<unknown>(); // useEffect error handler
  const [distances, setDistances] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState(''); // part of searchbar component
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [draftMinPrice, setDraftMinPrice] = useState('');
  const [draftMaxPrice, setDraftMaxPrice] = useState('');
  const [savedSearch, setSavedSearch] = useState<SavedFilter[]>(() =>
    readSavedFavorites()
  );
  const [searchName, setSearchName] = useState(''); // this was added to add a name to the user's saved filter name
  // addFavorite state will push the vehicleId into watchlist (users-favorites)
  const [favorites, setFavorites] = useState<Vehicle[]>(() => readFavorites());

  // this event handler adds the vehicleId to a new vehicle Card array in the favorites section
  function handleAddFavorite(vehicle: Vehicle) {
    if (favorites.some((v) => v.vehicleId === vehicle.vehicleId)) {
      alert('This vehicle has already been added to your Watchlist');
      return;
    }
    const updatedFavorites = [...favorites, vehicle];
    setFavorites(updatedFavorites);
    writeFavorites(updatedFavorites);
  }

  function handleRemoveFavorite(vehicle: Vehicle) {
    const remainingFavorites: Vehicle[] = favorites.filter(
      (v) => v.vehicleId !== vehicle.vehicleId
    );
    setFavorites(remainingFavorites);
    writeFavorites(remainingFavorites);
  }

  function handleSavedSearchName(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchName(e.target.value);
  }

  function handleFilterChange(value: string) {
    setSelectedFilter(value);
  }

  // this handler is needed to sort by price min - max values
  function handlePriceRange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!draftMinPrice && !draftMaxPrice) {
      alert('Please input a Min or Max value to filter by price range');
      return;
    }
    setMinPrice(draftMinPrice ? Number(draftMinPrice) : undefined);
    setMaxPrice(draftMaxPrice ? Number(draftMaxPrice) : undefined);
    setSelectedFilter('priceRange');
  }

  function handleApplySavedFilter(filter: SavedFilter) {
    setSelectedFilter(filter.filterType);
    setMinPrice(filter.minPrice);
    setMaxPrice(filter.maxPrice);
    setSearchTerm(filter.searchTerm || '');
  }

  // this handler is used to create a saved Search that is a clickable div element.
  function handleSaveCurrentFilter() {
    const newSavedFilter: SavedFilter = {
      name: searchName,
      filterType: selectedFilter,
      minPrice: draftMinPrice ? parseInt(draftMinPrice) : undefined,
      maxPrice: draftMaxPrice ? parseInt(draftMaxPrice) : undefined,
      searchTerm: searchTerm,
    };
    const alreadyExists = savedSearch.some((filter) => {
      return (
        filter.filterType === newSavedFilter.filterType &&
        filter.minPrice === newSavedFilter.minPrice &&
        filter.maxPrice === newSavedFilter.maxPrice &&
        filter.searchTerm === newSavedFilter.searchTerm
      );
    });
    if (alreadyExists) {
      alert('You already saved this search');
      return;
    }
    // this block saves the user's saved favorites to local storage
    setSavedSearch((prev) => {
      const updated = [...prev, newSavedFilter];
      writeSavedFavorites(updated);
      return updated;
    });
    setSearchName('');
  }

  // this is used to filter cars by searchTerm in the SearchBar component
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

  // this conditional statement is used to filter cars by price range
  if (selectedFilter === 'priceRange') {
    finalCars = filteredCars.filter((car) => {
      const carPrice = car.startingPrice;
      const min = minPrice ? Number(minPrice) : 0;
      const max = maxPrice ? Number(maxPrice) : Infinity;
      return carPrice >= min && carPrice <= max;
    });
  }

  // this conditional statement represents the different options the user can sort the available vehicles by
  if (selectedFilter === 'priceLowHigh') {
    finalCars.sort((a, b) => a.startingPrice - b.startingPrice);
  } else if (selectedFilter === 'priceHighLow') {
    finalCars.sort((a, b) => b.startingPrice - a.startingPrice);
  } else if (selectedFilter === 'mileage') {
    finalCars.sort((a, b) => a.mileage - b.mileage);
  } else if (selectedFilter === 'favorite') {
    finalCars = finalCars.filter((v) =>
      favorites.some((fav) => fav.vehicleId === v.vehicleId)
    );
  }

  // this useEffect was created to simulate distances from a seller dealership
  // to where the buyer's address is
  useEffect(() => {
    const generatedDistances = entries.map(() => randomDistance());
    setDistances(generatedDistances);
  }, [entries]);

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
      <div className="runlist-container">
        <div className="row">
          <div className="column-quarter">
            <SearchBar searchTerm={searchTerm} onCustomChange={setSearchTerm} />
            <SavedSearches
              savedFilters={savedSearch}
              onApplySavedFilter={handleApplySavedFilter}
            />
            <Filters
              selectedFilter={selectedFilter}
              onFilterChange={handleFilterChange}
              onPriceChange={handlePriceRange}
              draftMinPrice={draftMinPrice}
              draftMaxPrice={draftMaxPrice}
              setDraftMinPrice={setDraftMinPrice}
              setDraftMaxPrice={setDraftMaxPrice}
              onSaveFilter={handleSaveCurrentFilter}
              searchName={searchName}
              onSearchNameChange={handleSavedSearchName}
            />
          </div>
          <div className="column-half">
            <div className="margin-top">
              <VehicleList
                entries={finalCars}
                distances={distances}
                onAddFavorite={handleAddFavorite}
                onRemoveFavorite={handleRemoveFavorite}
                favorites={favorites}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
