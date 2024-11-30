import BaseDay from './BaseDay';
import { useAuth } from '../hooks/useAuth';
import { DaySize } from '../layout/daySizes';

interface NotConnectedDayProps {
  day: number;
  size: DaySize;
}

const NotConnectedDay = ({ day, size }: NotConnectedDayProps) => {
  const { login } = useAuth();

  return (
    <BaseDay
      day={day}
      size={size}
      outterClasses='bg-white border-none cursor-pointer'
      onClick={() => login()}
    />
  );
};

export default NotConnectedDay;
