import '../Pages/HomePage.css';
import '../Components/CarCarousel';
import { CarCarousel } from '../Components/CarCarousel';

// solve the error showing up on line 7 Image[]...

const images: Image[] = [
  { src: '/images/2007-toyota-camry-ce-white.jpg', alt: '2007 Toyota Camry' },
  {
    src: '/images/2009-toyota-highlander-tan.jpg',
    alt: '2009 Toyota Highlander',
  },
  { src: '/images/2007-ford-mustang-black.jpg', alt: '2007 Ford Mustang' },
  {
    src: 'images/2011-chevrolet-silverado-red.jpg',
    alt: '2011 Chevrolet Silverado',
  },
  { src: '/images/2012-bmw-430i-silver.jpg', alt: '2012 BMW 430i' },
  { src: '/images/2012-nissan-kicks-black.jpg', alt: '2012 Nissan Kicks' },
  { src: '/images/2022-ford-maverick-silver.jpg', alt: '2022 Ford Maverick' },
  {
    src: '/images/2011-Toyota-4runner-sr5-grey.jpg',
    alt: '2011 Toyota 4Runner',
  },
  { src: '/images/2010-toyota-tundra-tan.jpg', alt: '2010 Toyota Tundra' },
  { src: '/images/2010-jeep-wrangler-4x4-red.jpg', alt: '2010 Jeep Wrangler' },
  {
    src: '/images/2015-hyundai-santa-fe-red.jpg',
    alt: '2015 Hyundai Santa Fe',
  },
];

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
            <CarCarousel images={images} />
          </div>
        </div>
      </div>
    </div>
  );
}
