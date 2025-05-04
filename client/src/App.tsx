import './App.css';
import { NavBar } from './assets/Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './assets/Pages/NotFound';
import { RunList } from './assets/Pages/RunList';
import { HomePage } from './assets/Pages/HomePage';
import { LiveAuction } from './assets/Pages/LiveAuction';
import { BuyNow } from './assets/Pages/BuyNow';
import { MyPurchases } from './assets/Pages/MyPurchases';

// this file will only have the routes to the page
// the useEffect should be placed in the component that will be fetching the data
// the way outlet works is that we let all the stuff that is not the navbar show on the page
// which changes depending on the route you are on

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="/runlist" element={<RunList />} />
        <Route path="/liveauction" element={<LiveAuction />} />
        <Route path="/buynow" element={<BuyNow />} />
        <Route path="/mypurchases" element={<MyPurchases />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
