import { PiArrowFatLeftLight, PiArrowFatRightLight } from 'react-icons/pi';
import './CarCarousel.css';
import { FaRegCircleDot } from 'react-icons/fa6';
import { FaRegCircle } from 'react-icons/fa';

export function CarCarousel() {
  return (
    <>
      <PiArrowFatLeftLight className="arrow-color-left" size={200} />
      <div>
        <img
          className="car-image"
          alt="car image here"
          src="/images/2001-lexus-gs-430-black.jpg"
        />
      </div>
      <PiArrowFatRightLight size={200} className="arrow-color-right" />
      <div className="circle-container">
        <div className="circle-spacing">
          <FaRegCircleDot size={32} />
        </div>
        <div className="circle-spacing">
          <FaRegCircle size={32} />
        </div>
      </div>
    </>
  );
}
