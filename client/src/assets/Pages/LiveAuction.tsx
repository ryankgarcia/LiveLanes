import { IoIosStarOutline } from 'react-icons/io';
import { LiveAuctionCard } from '../Components/BidCard';
import { Details } from '../Components/Details';
import { NextUpCard } from '../Components/NextUpCard';
import { SearchBar } from '../Components/SearchBar';
import { useEffect, useState } from 'react';
import { readVehicles, Vehicle } from '../../data'; // this needs to import data.ts into this portion of the project
import './LiveAuctionLayout.css';

export function LiveAuction() {
  const [searchTerm, setSearchTerm] = useState(''); // part of searchbar component
  const [entries, setEntries] = useState<Vehicle[]>([]); // controls initial state of the Vehicle data being pulled by API call
  const [isLoading, setIsLoading] = useState(false); // lets user know the page is loading
  const [error, setError] = useState<unknown>(); // useEffect error handler

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

  useEffect(() => {
    async function load() {
      try {
        const entries = await readVehicles();
        // assign a lane to every vehicle here
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
    <div className="auction-container">
      <div className="auction-row">
        <div className="auction-column-left">
          <div className="scroll-container-cards">
            <LiveAuctionCard />
          </div>
        </div>
        <div className="liveauction-searchBar">
          <SearchBar searchTerm={searchTerm} onCustomChange={setSearchTerm} />
        </div>
        <div className="auction-2button-container">
          <button className="liveauction-autoBidButton">A</button>
          <button className="liveauction-favButton">
            {<IoIosStarOutline color="white" />}
          </button>
        </div>
        <div className="auction-column-right">
          <div className="scroll-container-details">
            <Details />
          </div>
        </div>
      </div>
      {/* <SearchBar /> */}
      <div className="auction-column-full">
        <div className="scroll-container-cards">
          {filteredCars.length > 0 ? (
            filteredCars.map((entry) => (
              <NextUpCard key={entry.vehicleId} entry={entry} />
            ))
          ) : (
            <div className="no-vehicle-options">
              Sorry, no vehicles matched your search word.
            </div>
          )}
          {/* <NextUpCard /> */}
        </div>
      </div>
      {/* <div className="auction-row"> */}

      {/* <div className="scroll-container-details">
        </div> */}
      {/* </div> */}
    </div>
  );
}
