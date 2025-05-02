import { PiArrowFatLeftLight } from 'react-icons/pi';

type Props = {
  onCustomClick: () => void;
};

export function PrevArrow({ onCustomClick }: Props) {
  return (
    <PiArrowFatLeftLight
      className="prev-image"
      size="3rem"
      onClick={onCustomClick}
    />
  );
}
