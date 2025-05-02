import { PiArrowFatLeftLight } from 'react-icons/pi';

type Props = {
  onCustomClick: () => void;
};

export function PrevArrow({ onCustomClick }: Props) {
  return (
    <PiArrowFatLeftLight
      onClick={onCustomClick}
      className="prev-image"
      size="6rem"
    />
  );
}
