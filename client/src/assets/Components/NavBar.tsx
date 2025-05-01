import { BsFillCarFrontFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import './NavBar.css';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export function NavBar() {
  const location = useLocation();
  console.log('location', location);

  const bgColorGreen =
    location.pathname === '/mypurchases' ? 'bg-green' : 'bg-black';

  const bgColorBlack =
    location.pathname === '/liveauction' ? 'bg-white' : 'bg-green';

  if (location.pathname === '/mypurchases') {
    ('bg-green');
  } else if (location.pathname === '/buynow') {
    ('bg-black');
  }
  // const bgColorWhite =
  //   location.pathname === '/liveauction' ? 'bg-white' : 'bg-black';

  // if (location.pathname === '/mypurchases') {
  //   bgColorGreen;
  // } else if (location.pathname === '/runlist') {
  //   bgColorGreen;
  // } else if (location.pathname === '/buynow') {
  //   bgColorBlack;
  // } else if (location.pathname === '/liveauction') {
  //   bgColorWhite;
  // }

  // there are styles that can be conditionally added depending on the page
  // the user is on. bg-black, bg-green, bg-white

  return (
    <div>
      <div className={`navbar-top ${bgColorGreen}`}>
        <div className="logo">LiveLanes</div>
        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }>
            <span>Home</span>
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
          {/* this is where userManagement will be... */}
        </div>
      </div>
      <div className={`navbar-bottom ${bgColorBlack}`}>
        <NavLink
          to="/buynow"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }>
          <span>Buy Now</span>
        </NavLink>
        <NavLink
          to="/runlist"
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
