import { PiArrowFatLeftLight, PiArrowFatRightLight } from 'react-icons/pi';
import './CarCarousel.css';

export function CarCarousel() {
  return (
    // <div className="page-container">
    <>
      <h3>You might like these...</h3>
      <PiArrowFatLeftLight className="arrow-color-left" size={200} />
      <div className="image-container">
        <img alt="car image here" src="/images/2001-lexus-gs-430-black.jpg" />
        {/* image here... */}
      </div>
      <PiArrowFatRightLight size={200} className="arrow-color-right" />
    </>
    // </div>
  );
}
