import { IoIosStarOutline } from 'react-icons/io';
import { LiveAuctionCard } from '../Components/BidCard';
import { NextUpCard } from '../Components/NextUpCard';
import { SearchBar } from '../Components/SearchBar';
import { useEffect, useState } from 'react';
import { readFavorites, readVehicles, Vehicle } from '../../data'; // this needs to import data.ts into this portion of the project
import './LiveAuctionLayout.css';
import { Details } from '../Components/Details';

// the purpose of this function is to assign lane letter's to each car in the LiveAuction page
function laneAssign(): string[][] {
  const laneAssignment: string[][] = [];
  const laneLetter: string[] = ['a', 'b', 'c', 'd', 'e'];

  for (let i = 0; i < laneLetter.length; i++) {
    const letterArr: string[] = [];

    for (let j = 1; j < 51; j++) {
      letterArr.push(`${laneLetter[i]}${j}`);
    }
    laneAssignment.push(letterArr);
  }

  return laneAssignment;
}

export function LiveAuction() {
  const [searchTerm, setSearchTerm] = useState(''); // part of searchbar component
  const [entries, setEntries] = useState<Vehicle[]>([]); // controls initial state of the Vehicle data being pulled by API call
  const [isLoading, setIsLoading] = useState(false); // lets user know the page is loading
  const [error, setError] = useState<unknown>(); // useEffect error handler
  const [bids, setBids] = useState<{ [vehicleId: number]: number }>({}); // this state will handle bids the user is currently placing
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null); // this will control what vehicle details show up in the details component
  const [isAuctionLive, setIsAuctionLive] = useState<boolean>(false); // tie this to a button on the page, that lets the user begin the simulated auction event
  const [timeouts, setTimeouts] = useState<{ [vehicleId: number]: number }>({});
  const [carsInLiveAuction, setCarsInLiveAuction] = useState<Vehicle[]>([]);
  const [lanes, setLanes] = useState<string[][]>(() => laneAssign());
  const [filteredCars, setFilteredCars] = useState<Vehicle[] | undefined>(
    undefined
  );

  // the purpose of this useEffect is to allow the user to press the favorites
  // star and filter the cars on display to the cars they favorite, from localStorage
  const trimSearchTerm = searchTerm.trim().toLowerCase();

  useEffect(() => {
    const favoriteCars = entries.filter((term) => {
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
    setFilteredCars(favoriteCars);
  }, [entries, trimSearchTerm]);

  function handleStartAuction() {
    if (isAuctionLive) return;
    setIsAuctionLive(true);
    const entriesWithLanes = liveLaneAssigns(entries);
    // assign a lane to every vehicle here
    const first5 = entriesWithLanes.splice(0, 5);
    setCarsInLiveAuction(first5);
    setTimeouts(() => {
      const newTimeouts: { [vehicleId: number]: number } = {};
      for (const entry of first5) {
        newTimeouts[entry.vehicleId] = 40;
      }
      return newTimeouts;
    });
    const id = setInterval(() => {
      setTimeouts((prev) => {
        const newTimeouts: { [vehicleId: number]: number } = {};
        for (const entry of first5) {
          // Don't let this go less than 0. If at 0, remove Bid button
          if (prev[entry.vehicleId] === 0) {
            newTimeouts[entry.vehicleId] = 0;
          } else {
            newTimeouts[entry.vehicleId] = prev[entry.vehicleId] - 1;
          }
        }
        // figure out if auction is done and call setIsAuctionLive(false);
        // and clearInterval(intervalId) to stop the timer
        if (Object.values(newTimeouts).every((value) => value === 0)) {
          setIsAuctionLive(false);
          clearInterval(id);
          return {};
        }
        return newTimeouts;
      });
    }, 1000);
  }

  function handlePlaceBid(vehicleId: number) {
    setBids((prevBids) => ({
      ...prevBids,
      [vehicleId]: (prevBids[vehicleId] ?? 0) + 150,
    }));

    const timeLeft = timeouts[vehicleId];
    if (timeLeft <= 7) {
      setTimeouts((prev) => ({
        ...prev,
        [vehicleId]: 9,
      }));
    }
  }

  function handleReadFavorites() {
    const favoritesFromStorage = readFavorites();
    setFilteredCars(favoritesFromStorage);
    return;
  }

  function liveLaneAssigns(vehicles: Vehicle[]): Vehicle[] {
    let j = 0;
    const lanesClone = structuredClone(lanes);
    for (let i = 0; i < vehicles.length; i++) {
      const lane = lanesClone[j].shift();
      if (lane)
        // this if(lane) is checking if its a string
        vehicles[i].laneLetter = lane;
      j++;
      if (j >= 5) {
        j = 0;
      }
    }
    setLanes(lanesClone);
    return vehicles;
  }

  useEffect(() => {
    async function load() {
      try {
        const entries = await readVehicles();
        setEntries(entries);
        // added these lines below
        const initialBids: { [vehicleId: number]: number } = {};
        for (const entry of entries) {
          initialBids[entry.vehicleId] = entry.startingPrice ?? 0;
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

  return (
    <div className="auction-container">
      <div className="auction-row">
        <div className="auction-column-left">
          <div className="scroll-container-bidCards">
            {/* the slice method was used here to only show 5 cars at once,
            but the remaining cars must show up in their lane assignments
            in the NextUpCard */}
            {carsInLiveAuction.length > 0 ? (
              carsInLiveAuction.map((entry) => (
                <LiveAuctionCard
                  key={entry.vehicleId}
                  entry={entry}
                  isAuctionLive={isAuctionLive}
                  bid={bids[entry.vehicleId!] ?? 0}
                  timeouts={timeouts} // this props needs to disable the button from being clicked if timeouts = 0 seconds
                  onPlaceBid={() => handlePlaceBid(entry.vehicleId!)}
                  onSelect={() => setSelectedVehicle(entry)}
                />
              ))
            ) : (
              <div className="startAuction">
                There are no vehicles yet. . . Press the 'Start Auction' button
                below to begin
              </div>
            )}
          </div>
          <div className="liveauction-searchBar">
            <SearchBar searchTerm={searchTerm} onCustomChange={setSearchTerm} />
          </div>
          <div className="auction-2button-container">
            {/* this button controls the start of the entire app's live auction timer (demo purposes) */}
            <button className="startLive-auction" onClick={handleStartAuction}>
              Start Auction
            </button>
            <button className="liveauction-autoBidButton">A</button>
            <button
              className="liveauction-favButton"
              onClick={() => {
                handleReadFavorites();
              }}>
              {<IoIosStarOutline color="white" />}
            </button>
          </div>
          <div
            className="scroll-container-nextUpCards"
            // onClick={() => {
            //   if (carsInLiveAuction.length > 0) handleReadFavorites();
            // }}
          >
            {filteredCars?.length > 0 ? (
              filteredCars?.map((entry) => (
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
            {selectedVehicle && (
              <Details
                bid={bids[selectedVehicle.vehicleId]}
                entry={selectedVehicle}
                timeout={timeouts[selectedVehicle.vehicleId]}
              />
            )}
          </div>
        </div>
        {/* <div className="auction-column-full"> */}
      </div>
      {/* </div> */}
    </div>
  );
}
