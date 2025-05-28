import './CarCarouselLayout.css';
import { useEffect, useState } from 'react';
import { PrevArrow } from './CarouselComps/PrevArrow';
import { CarouselImage } from './CarouselComps/CarouselImage';
import { NextArrow } from './CarouselComps/NextArrow';
import { Dots } from './CarouselComps/Dots';

export type Image = {
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
};

export function CarCarousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images, currentIndex]);

  function handleNext() {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  function handlePrev() {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function handleCurrentIndex(i: number) {
    setCurrentIndex(i);
  }
  return (
    <div>
      <PrevArrow onCustomClick={handlePrev} />
      <CarouselImage currentImage={images[currentIndex]} />
      <NextArrow onCustomClick={handleNext} />
      <Dots
        currentIndex={currentIndex}
        numDots={images.length}
        onCustomClick={handleCurrentIndex}
      />
    </div>
  );
}
