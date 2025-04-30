import { CarCarousel } from '../Components/CarCarousel';
import '../Pages/HomePage.css';
import { FaRegCircleDot, FaRegCircle } from 'react-icons/fa6';

export function HomePage() {
  return (
    // <div>
    <div className="homepage-container">
      <CarCarousel />
      <div className="circle-container">
        <div className="circle-spacing">
          <FaRegCircleDot size={32} />
        </div>
        <div className="circle-spacing">
          <FaRegCircle size={32} />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
