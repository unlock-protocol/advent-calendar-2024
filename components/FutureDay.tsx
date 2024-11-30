import { DaySize } from '../layout/daySizes';
import BaseDay from './BaseDay';

interface FutureDayProps {
  day: number;
  size: DaySize;
}

const FutureDay = ({ day, size }: FutureDayProps) => {
  return (
    <BaseDay
      outterClasses='bg-tertiary border-none text-cream'
      day={day}
      size={size}
    />
  );
};

export default FutureDay;
