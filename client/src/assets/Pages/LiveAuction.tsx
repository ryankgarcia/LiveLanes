// import { Details } from '../Components/Details';
import { LiveAuctionCard } from '../Components/BidCard';
import { NextUpCard } from '../Components/NextUpCard';
// import { LiveAuctionNextUpCard } from '../Components/LiveAuctionNextUpCard';
// import { SearchBar } from '../Components/SearchBar';
import './LiveAuctionLayout.css';

export function LiveAuction() {
  return (
    <div className="auction-container">
      {/* <SearchBar /> */}
      <div className="auction-row">
        <div className="auction-column-full">
          <div className="scroll-container-cards">
            <LiveAuctionCard />
          </div>
        </div>
      </div>
      <div className="auction-column-full">
        <div className="scroll-container-cards">
          <NextUpCard />
          <NextUpCard />
        </div>
      </div>
      {/* <Details /> */}
    </div>
  );
}
