import { DaySize } from '../layout/daySizes';
import BaseDay from './BaseDay';

interface FutureDayProps {
  day: number;
  size: DaySize;
}

const FutureDay = ({ day, size }: FutureDayProps) => {
  return (
    <BaseDay outterClasses='bg-[#494E53] border-none' day={day} size={size} />
  );
};

export default FutureDay;
