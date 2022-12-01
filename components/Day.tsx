import { useAuth } from "../hooks/useAuth";
import { useLock } from "../hooks/useLock";
import FutureDay from "./FutureDay";
import LoadingDay from "./LoadingDay";
import NotConnectedDay from "./NotConnectedDay";
import UnlockableDay from "./UnlockableDay";

interface DayProps {
  day: number;
  now?: Date;
  isLoading: boolean;
}

const Day = ({ day, now, isLoading }: DayProps) => {
  const { isAuthenticated, user } = useAuth();

  if (isLoading || !now) {
    return <LoadingDay day={day} />;
  }

  if (
    now.getUTCFullYear() < 2022 ||
    now.getUTCMonth() < 11 ||
    now.getUTCDate() < day
  ) {
    return <FutureDay day={day} />;
  }

  if (!user) {
    if (day === 1) {
      return <NotConnectedDay day={day} />;
    }
    return <FutureDay day={day} />;
  }

  // We should show this only if the user has unlocked the previous day!
  return <UnlockableDay user={user} day={day} />;
};

export default Day;
