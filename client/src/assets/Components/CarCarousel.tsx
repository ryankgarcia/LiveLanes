import './CarCarousel.css';
import { CarouselImage } from './CarouselComps/CarouselImage';
import { Dots } from './CarouselComps/Dots';
import { useCallback, useEffect, useState } from 'react';
import { NextArrow } from './CarouselComps/NextArrow';
import { PrevArrow } from './CarouselComps/PrevArrow';

export type ImageProps = {
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
};

export function CarCarousel({ images }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    const nextIndex = (imageIndex + 1) % images.length;
    setImageIndex(nextIndex);
  }, [images, imageIndex]);

  const prevImage = useCallback(() => {
    const prevIndex = (imageIndex - 1 + images.length) % images.length;
    setImageIndex(prevIndex);
  }, [images, imageIndex]);

  useEffect(() => {
    const timeoutHandle = setTimeout(nextImage, 3000);
    return () => clearTimeout(timeoutHandle);
  }, [nextImage]);

  return (
    <div className="carousel">
      <PrevArrow onCustomClick={prevImage} />
      <CarouselImage image={images[imageIndex]} />
      <NextArrow onCustomClick={nextImage} />
      <Dots
        numDots={images.length}
        activeIndex={imageIndex}
        onClick={(i) => setImageIndex(i)}
      />
    </div>
  );
}
