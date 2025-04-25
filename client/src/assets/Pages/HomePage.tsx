import { CarCarousel } from '../Components/CarCarousel';
import { NavBar } from '../Components/NavBar';
import '../Pages/HomePage.css';

export function HomePage() {
  return (
    <div className="bg-green">
      <NavBar />
      <CarCarousel />
    </div>
  );
}
