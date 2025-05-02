import { PiArrowFatRightLight } from 'react-icons/pi';

type Props = {
  onCustomClick: () => void;
};

export function NextArrow({ onCustomClick }: Props) {
  return (
    <PiArrowFatRightLight
      onClick={onCustomClick}
      className="next-image"
      size="3rem"
    />
  );
}
