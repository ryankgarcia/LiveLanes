import { PiArrowFatLeftLight } from 'react-icons/pi';
import '../CarCarouselLayout.css';

type Props = {
  onCustomClick: () => void;
};

export function PrevArrow({ onCustomClick }: Props) {
  return (
    <PiArrowFatLeftLight
      size="3rem"
      className="prev-image"
      onClick={onCustomClick}
    />
  );
}
