import { useEffect, useState } from 'react';
import { readVehicles, Vehicle } from '../../data'; // this needs to import data.ts into this portion of the project
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
  const [distances, setDistances] = useState<number[]>([]); // useEffect to create
  const [searchTerm, setSearchTerm] = useState(''); // part of searchbar component
  const [selectedFilter, setSelectedFilter] = useState('all'); // might need to change this to an empty string ''
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [draftMinPrice, setDraftMinPrice] = useState('');
  const [draftMaxPrice, setDraftMaxPrice] = useState('');
  const [savedSearch, setSavedSearch] = useState<SavedFilter[]>([]);
  const [searchName, setSearchName] = useState(''); // this was added to add a name to the user's saved filter name
  // addFavorite state will push the vehicleId into watchlist (users-favorites)
  const [favorites, setFavorites] = useState<Vehicle[]>([]);

  // this event handler adds the vehicleId to a new vehicle Card array in the favorites section
  function handleAddFavorite(vehicle: Vehicle) {
    if (favorites.some((v) => v.vehicleId === vehicle.vehicleId)) {
      alert('This vehicle has already been added to your Watchlist');
      return;
    }

    setFavorites((prev) => [...prev, vehicle]);
  }

  // this needs to properly remove an entry.
  function handleRemoveFavorite(vehicle: Vehicle) {
    setFavorites((prev) =>
      prev.filter((v) => v.vehicleId !== vehicle.vehicleId)
    );
  }

  // this needs to be props for filter component. this event handler will allow user to change the name of their saved search filter
  // to the name of their
  function handleSavedSearchName(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchName(e.target.value);
  }

  function handleFilterChange(value: string) {
    console.log('value', value);
    setSelectedFilter(value);
  }

  // this handler is needed to sort by price min - max values
  function handlePriceRange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!draftMinPrice && !draftMaxPrice) {
      alert(
        'Please fill out at least a Min or Max value to filter by price range'
      );
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

  // this handler is used to create a saved Search radio button.
  function handleSaveCurrentFilter() {
    const newSavedFilter: SavedFilter = {
      filterType: selectedFilter,
      minPrice: draftMinPrice ? parseInt(draftMinPrice) : undefined,
      maxPrice: draftMaxPrice ? parseInt(draftMaxPrice) : undefined,
      searchTerm: searchName,
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
    setSavedSearch((prev) => [...prev, newSavedFilter]);
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

  // finalCars = isFavorite.filter((v) => v.vehicleId === finalCars.vehicleId);
  // finalCars.filter((f) => f.vehicleId === finalCars.vehicleId)
  // finalCars = isFavorite.filter((v) => v.vehicleId === isFavorite.vehicleId);

  // this useEffect was created to simulate distances from a seller dealership from where the buyer is from based on the buyer's address
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
              // searchName={searchName}
              // onSearchNameChange={handleSavedSearchName}
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
              // isFavorite={isFavorite}
              // favorites={favorite}
              // onSearchNameChange={handleSavedSearchName}
              // searchName and setSearchName were added here
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
