// import { Details } from '../Components/Details';
import { LiveAuctionCard } from '../Components/BidCard';
import { Details } from '../Components/Details';
import { NextUpCard } from '../Components/NextUpCard';
// import { LiveAuctionNextUpCard } from '../Components/LiveAuctionNextUpCard';
// import { SearchBar } from '../Components/SearchBar';
import './LiveAuctionLayout.css';

export function LiveAuction() {
  return (
    <div className="auction-container">
      <div className="auction-row">
        <div className="auction-column-left">
          <div className="scroll-container-cards">
            <LiveAuctionCard />
          </div>
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
          <NextUpCard />
          <NextUpCard />
        </div>
      </div>
      {/* <div className="auction-row"> */}

      {/* <div className="scroll-container-details">
        </div> */}
      {/* </div> */}
    </div>
  );
}
