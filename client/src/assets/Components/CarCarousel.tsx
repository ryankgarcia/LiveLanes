import { PiArrowFatLeftLight, PiArrowFatRightLight } from 'react-icons/pi';
import './CarCarousel.css';
import { FaRegCircleDot } from 'react-icons/fa6';
import { FaRegCircle } from 'react-icons/fa';

// export type ImageProps = {
//   src: string;
//   alt: string;
// };

type Props = {
  images: Image[];
};

export function CarCarousel({ images }: Props) {
  return (
    <>
      <PiArrowFatLeftLight className="prev-image" size={200} />
      <div>
        <img
          className="car-image"
          alt={currentImage.alt}
          // src="/images/2001-lexus-gs-430-black.jpg"
          src={`${images[0]}`}
        />
      </div>
      <PiArrowFatRightLight size={200} className="next-image" />
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
