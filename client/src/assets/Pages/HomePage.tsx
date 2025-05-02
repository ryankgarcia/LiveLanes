import { CarCarousel } from '../Components/CarCarousel';
import '../Pages/HomePage.css';

export function HomePage() {
  return (
    <div className="homepage-container">
      <div className="row">
        <div className="header">
          <h3>You might like these . . .</h3>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <div className="carousel-container">
            <CarCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
