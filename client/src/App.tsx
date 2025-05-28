import { NavBar } from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './Pages/NotFound';
import { RunList } from './Pages/RunList';
import { HomePage } from './Pages/HomePage';
import { LiveAuction } from './Pages/LiveAuction';
import { BuyNow } from './Pages/BuyNow';
import { MyPurchases } from './Pages/MyPurchases';
import { Sell } from './Pages/Sell';

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
        <Route path="/sell" element={<Sell />} />
        <Route path="/mypurchases" element={<MyPurchases />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
