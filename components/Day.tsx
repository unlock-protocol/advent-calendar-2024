import FutureDay from './FutureDay';
import LoadingDay from './LoadingDay';
import NotConnectedDay from './NotConnectedDay';
import UnlockableDay from './UnlockableDay';
import { useAuth } from '../hooks/useAuth';
import { DaySize } from '../layout/daySizes';

interface DayProps {
  day: number;
  start?: number;
  isLoading: boolean;
  lock?: string | null;
  hasPreviousDayMembership?: boolean;
  hasMembership?: boolean;
  network: number;
  refetch: any;
  size: DaySize;
}

const Day = ({
  day,
  start,
  isLoading,
  lock,
  network,
  hasMembership,
  hasPreviousDayMembership,
  refetch,
  size,
}: DayProps) => {
  const { wallet } = useAuth();

  if (isLoading || !start || !lock) {
    return <LoadingDay day={day} size={size} />;
  }
  const dayAsDate = new Date((Number(start) + (day - 1) * 24 * 60 * 60) * 1000);
  const isFutureDay = dayAsDate > new Date();

  if (isFutureDay) {
    return <FutureDay day={day} size={size} />;
  }

  if (!wallet) {
    if (day === 1) {
      return <NotConnectedDay day={day} size={size} />;
    }
    return <FutureDay day={day} size={size} />;
  }

  return (
    <UnlockableDay
      refetch={refetch}
      user={wallet.address}
      day={day}
      size={size}
      network={network}
      lock={lock}
      hasMembership={hasMembership}
      hasPreviousDayMembership={hasPreviousDayMembership}
    />
  );
};

export default Day;
