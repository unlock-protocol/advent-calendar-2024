'use client';
import { PublicLock } from '@unlock-protocol/contracts';
import { useReadContract, useReadContracts } from 'wagmi';
import { useAuth } from './useAuth';
import contracts from '../lib/contracts';

export const useCalendar = () => {
  const { wallet } = useAuth();

  const days = new Array(24).fill(0).map((d, i) => i + 1);

  const { data: start, isLoading: isLoadingStart, ...rest } = useReadContract({
    address: contracts.hook.address as `0x${string}`,
    abi: contracts.hook.ABI,
    functionName: 'start',
    chainId: contracts.network,
    args: [],
    scopeKey: 'start',
  });

  console.log({start, rest})

  const { data: lockAddresses, isLoading: isLoadingLocks } = useReadContracts({
    // @ts-expect-error
    contracts: days
      .map((d) => {
        const dayAsDate = new Date(
          (Number(start) + (d - 1) * 24 * 60 * 60) * 1000
        );
        const isFutureDay = dayAsDate > new Date();
        if (isFutureDay) {
          return;
        }
        return {
          address: contracts.hook.address as `0x${string}`,
          abi: contracts.hook.ABI,
          functionName: 'lockByDay',
          chainId: contracts.network,
          args: [d],
        };
      })
      .filter((d) => !!d),
    enabled: !!(start && !isLoadingStart),
    cacheTime: 3_600_000,
  });

  console.log(lockAddresses)

  // Now load all the locks that are available!
  const {
    data: validKeys,
    isLoading: isLoadingValidKeys,
    refetch,
  } = useReadContracts({
    contracts:
      lockAddresses?.map((lockAddresses) => ({
        address: lockAddresses?.result as `0x${string}`,
        abi: PublicLock.abi,
        functionName: 'getHasValidKey',
        chainId: contracts.network,
        args: [wallet],
      })) || [],
      query: {
        enabled: !!wallet,
      },
  });

  if (isLoadingStart || isLoadingLocks || isLoadingValidKeys) {
    return { isLoading: true, days: [], lockAddresses: [], validKeys: [] };
  }

  return { start, refetch, isLoading: false, days, lockAddresses, validKeys };
};
