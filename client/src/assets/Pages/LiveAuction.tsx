import { IoIosStarOutline } from 'react-icons/io';
import { LiveAuctionCard } from '../Components/BidCard';
// import { Details } from '../Components/Details';
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
  const [bids, setBids] = useState<{ [vehicleId: number]: number }>({}); // this state will handle bids the user is currently placing
  // const [openDetails, setOpenDetails] = useState<Vehicle>() // this will control what vehicle details show up in the details component

  // function handleDetails(vehicleId: number) {}

  function handlePlaceBid(vehicleId: number) {
    setBids((prevBids) => ({
      ...prevBids,
      [vehicleId]: (prevBids[vehicleId] ?? 0) + 150,
    }));
  }

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
        // added these lines below
        const initialBids: { [vehicleId: number]: number } = {};
        for (const entry of entries) {
          if (entry.vehicleId !== undefined) {
            initialBids[entry.vehicleId] = entry.startingPrice ?? 0;
          }
        }
        setBids(initialBids);
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

  function onCheckClick() {
    console.log('ive been clicked');
  }
  return (
    <div className="auction-container">
      <div className="auction-row">
        <div className="auction-column-left">
          <div className="scroll-container-bidCards">
            {/* the slice method was used here to only show 5 cars at once,
            but the remaining cars must show up in their lane assignments
            in the NextUpCard */}
            {entries.length > 0 ? (
              entries
                .slice(0, 5)
                .map((entry) => (
                  <LiveAuctionCard
                    key={entry.vehicleId}
                    entry={entry}
                    bid={bids[entry.vehicleId!] ?? 0}
                    onPlaceBid={() => handlePlaceBid(entry.vehicleId!)}
                  />
                ))
            ) : (
              <div>There are no vehicles yet . . .</div>
            )}
          </div>
          <div className="liveauction-searchBar">
            <SearchBar searchTerm={searchTerm} onCustomChange={setSearchTerm} />
          </div>
          <div className="auction-2button-container">
            {/* this button controls the start of the entire app's live auction timer (demo purposes) */}
            <button className="startLive-auction" onClick={onCheckClick}>
              Start Auction
            </button>
            <button className="liveauction-autoBidButton">A</button>
            <button className="liveauction-favButton">
              {<IoIosStarOutline color="white" />}
            </button>
          </div>
          <div className="scroll-container-nextUpCards">
            {filteredCars.length > 0 ? (
              filteredCars.map((entry) => (
                <NextUpCard key={entry.vehicleId} entry={entry} />
              ))
            ) : (
              <div className="no-vehicle-options">
                Sorry, no vehicles matched your search word.
              </div>
            )}
          </div>
        </div>
        <div className="auction-column-right">
          <div className="scroll-container-details">
            {/* <Details key={entry.vehicleId} entry={entry} /> */}
          </div>
        </div>
        {/* <div className="auction-column-full"> */}
      </div>
      {/* </div> */}
    </div>
  );
}
