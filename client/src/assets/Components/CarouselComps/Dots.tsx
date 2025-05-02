import { FaCircle, FaRegCircle } from 'react-icons/fa';

type Props = {
  numDots: number;
  currentIndex: number;
};

export function Dots({ numDots, currentIndex }: Props) {
  // const items = [];

  // for (let i = 0; i < numDots; i++) {
  //   items.push(currentIndex === <FaRegCircle className="progress-dot" />);
  // }

  return (
    <div className="progress-dots">
      {Array.from({ length: numDots }).map((_, index) =>
        currentIndex === index ? (
          <FaCircle key={index} className="progress-dot" />
        ) : (
          <FaRegCircle key={index} className="progress-dot" />
        )
      )}
    </div>
  );
}
