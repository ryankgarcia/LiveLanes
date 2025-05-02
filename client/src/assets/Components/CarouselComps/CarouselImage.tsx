import { Image } from '../CarCarousel';

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
      <h2 className="image-caption">{currentImage.alt}</h2>
    </div>
  );
}
