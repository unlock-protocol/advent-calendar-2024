'use client';
import Day from './Day';
import contracts from '../lib/contracts';
import { useCalendar } from '../hooks/useCalendar';
import FutureDay from './FutureDay';
import { daysSizes } from '../layout/daySizes';

export const Calendar = () => {
  const { days, lockAddresses, validKeys, isLoading, start, refetch } =
    useCalendar();
  return (
    <div className='grid grid-cols-4 md:grid-cols-10 lg:grid-cols-12 auto-rows-[72px] gap-2 sm:gap-4'>
      {days.map((day, index) => {
        if (!lockAddresses || !lockAddresses![day - 1]) {
          return <FutureDay key={day} day={day} size={daysSizes[day]} />;
        }
        const hasMembership = validKeys
          ? validKeys[index]?.result || false
          : false;
        const hasPreviousDayMembership = validKeys
          ? index == 0 || validKeys[index - 1]?.result || false
          : false;
        return (
          <Day
            lock={lockAddresses[day - 1].result as `0x${string}`}
            isLoading={isLoading}
            day={day}
            start={start ? Number(start) : undefined}
            network={contracts.network}
            hasMembership={!!hasMembership}
            hasPreviousDayMembership={!!hasPreviousDayMembership}
            refetch={refetch}
            size={daysSizes[day]}
            key={day}
          />
        );
      })}
    </div>
  );
};
