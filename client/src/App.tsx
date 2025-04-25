// import './App.css';
// import { NavBar } from './assets/Components/NavBar';
// import { NavBar } from './assets/Components/NavBar';
// import { Routes, Route } from 'react-router-dom';
// import { NotFound } from './assets/Pages/NotFound';
// import { VehicleDetails } from './assets/Components/VehicleDetails';
import { VehicleCard } from './assets/Components/VehicleCard';

// import { CarCarousel } from './assets/Components/CarCarousel';
// import { HomePage } from './assets/Pages/HomePage';

// this file will only have the routes to the page
// the useEffect should be placed in the component that will be fetching the data

export default function App() {
  return (
    <div>
      <VehicleCard />
      {/* <NavBar /> */}
      {/* <HomePage /> */}
      {/* <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="vehicles/:vehicleId" element={<VehicleDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </div>
  );
}
