import BaseDay from './BaseDay';
import { useAuth } from '../hooks/useAuth';
import { DaySize } from '../layout/daySizes';

interface NotConnectedDayProps {
  day: number;
  size: DaySize;
}

const NotConnectedDay = ({ day }: NotConnectedDayProps) => {
  const { login } = useAuth();

  return (
    <BaseDay
      day={day}
      outterClasses='bg-white border-none cursor-pointer'
      onClick={() => login()}
    />
  );
};

export default NotConnectedDay;
