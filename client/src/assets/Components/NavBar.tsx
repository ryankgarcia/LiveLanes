import { BsFillCarFrontFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import './NavBar.css';
import { NavLink, Outlet } from 'react-router-dom';

export function NavBar() {
  // there are styles that can be conditionally added depending on the page
  // the user is on. bg-black, bg-green, bg-white
  return (
    <div>
      <div className="navbar-top bg-black">
        <div className="logo">LiveLanes</div>
        <div className="nav-links">
          <NavLink
            to="/buy"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }>
            <span>Buy</span>
          </NavLink>
          <NavLink
            to="/sell"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }>
            <span>Sell</span>
          </NavLink>
          <NavLink
            to="/mypurchases"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }>
            <span>
              My Purchases <BsFillCarFrontFill />
            </span>
          </NavLink>
        </div>
        <div className="profile-icon">
          <FaUserCircle size={32} />
        </div>
      </div>
      <div className="navbar-bottom bg-green">
        <NavLink
          to="/buynow"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }>
          <span>Buy Now</span>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }>
          <span>Run List</span>
        </NavLink>
        <NavLink
          to="/LiveAuction"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }>
          <span>Live Auction</span>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
