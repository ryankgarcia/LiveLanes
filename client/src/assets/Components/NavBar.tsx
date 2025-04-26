import { BsFillCarFrontFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import './NavBar.css';
import { Outlet } from 'react-router-dom';

export function NavBar() {
  // there are styles that can be conditionally added depending on the page
  // the user is on. bg-black, bg-green, bg-white
  return (
    <div>
      <div className="navbar-top bg-black">
        <div className="logo">LiveLanes</div>
        <div className="nav-links">
          <span>Buy</span>
          <span>Sell</span>
          <span>
            My Purchases <BsFillCarFrontFill />
          </span>
        </div>
        <div className="profile-icon">
          <FaUserCircle size={32} />
        </div>
      </div>
      <div className="navbar-bottom bg-green">
        <span>Buy Now</span>
        <span>Run List</span>
        <span>Live Auction</span>
      </div>
      <Outlet />
    </div>
  );
}
