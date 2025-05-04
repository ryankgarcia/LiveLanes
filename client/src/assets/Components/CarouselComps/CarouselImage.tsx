import { Image } from '../CarCarousel';
import '../CarCarouselLayout.css';

type Props = {
  currentImage: Image;
};

export function CarouselImage({ currentImage }: Props) {
  return (
    <div className="image-wrapper">
      <img
        src={currentImage.src}
        alt={currentImage.alt}
        className="current-image"
      />
      <div className="image-caption">
        <h2>{currentImage.alt}</h2>
      </div>
    </div>
  );
}
