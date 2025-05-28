import { FaCircle, FaRegCircle } from 'react-icons/fa';
import '../CarCarouselLayout.css';

type Props = {
  numDots: number;
  currentIndex: number;
  onCustomClick: (i: number) => void;
};

export function Dots({ numDots, currentIndex, onCustomClick }: Props) {
  return (
    <div className="progress-dots">
      {Array.from({ length: numDots }).map((_, index) =>
        currentIndex === index ? (
          <FaCircle
            key={index}
            className="progress-dot"
            onClick={() => onCustomClick(index)}
          />
        ) : (
          <FaRegCircle
            key={index}
            className="progress-dot"
            onClick={() => onCustomClick(index)}
          />
        )
      )}
    </div>
  );
}
