import { PublicLock } from '@unlock-protocol/contracts';
import { toast } from 'react-hot-toast';
import UnlockedDay from './UnlockedDay';
import LoadingDay from './LoadingDay';
import BaseDay from './BaseDay';
import FutureDay from './FutureDay';
import {
  useBalance,
  useChainId,
  useReadContract,
  useSimulateContract,
  useSwitchChain,
  useWriteContract,
} from 'wagmi';
import contracts from '../lib/contracts';
import { useEffect, useRef, useState } from 'react';
import { LocksmithService } from '@unlock-protocol/unlock-js';
import { useWaitForTransactionReceipt } from 'wagmi';
import { AppConfig } from '../lib/AppConfig';
import ReCaptcha from 'react-google-recaptcha';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { DaySize } from '../layout/daySizes';
import { useWallets } from '@privy-io/react-auth';

interface MintableProps {
  day: number;
  lock: string;
  network: number;
  size: DaySize;
  onMinting: (hash: string) => void;
}

const explorer = (network: number, hash: string) => {
  if (network === 84532) {
    return `https://sepolia.basescan.org/tx/${hash}`;
  }
  return `https://basescan.org/tx/${hash}`;
};

const Mintable = ({ lock, network, day, size, onMinting }: MintableProps) => {
  const [resumeCheckout, setResumeCheckout] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { wallets } = useWallets();
  const { wallet, canClaim } = useAuth();
  const recaptchaRef = useRef<any>();
  const { query } = useRouter();

  const { data: referrerAddress } = useReadContract({
    address: lock as `0x${string}`,
    abi: PublicLock.abi,
    functionName: 'ownerOf',
    chainId: contracts.network,
    args: [query?.r!],
    query: {
      enabled: !!(lock && query?.d === day.toString() && query?.r)
    }
  });

  const { data: userBalance } = useBalance({
    address: wallet as `0x${string}`,
  });

  const referrer = referrerAddress as `0x${string}` || '0x0000000000000000000000000000000000000000';
  const { data } = useSimulateContract({
    address: lock as `0x${string}`,
    abi: PublicLock.abi,
    functionName: 'purchase',
    chainId: network,
    account: wallet as `0x${string}`,
    args: [
      [0],
      [wallet!],
      [referrer],
      [wallet!],
      [''],
    ],
    gas: BigInt(700_000), // This is high, just in case they win!
  });


  const { writeContractAsync, data: hash } = useWriteContract();

  const { switchChain } = useSwitchChain()
  const chainId = useChainId()

  useEffect(() => {
    if(resumeCheckout) {
      setResumeCheckout(false)
      checkout()
    }
  },[chainId, resumeCheckout])


  const checkout = async () => {
    try {
      if (userBalance && userBalance?.value > 0) {
        setLoading(true);
        if (chainId !== network) {
          setResumeCheckout(true);
          await switchChain({
            chainId: network,
          });
        } else {
          try {
            const hash = await writeContractAsync!(data!.request);
            const explorerLink = explorer(network, hash!)
            toast.success(
              <p>
              Your{' '}
              <Link
                className='inline underline'
                target='_blank'
                href={explorerLink}
              >
                NFT is being minted
              </Link>
              ! Please stand by!              
              </p>,
              { duration: 10000 }
            );
  
            onMinting(hash!);
          } catch (e) {
            console.error(e);
            toast.error(
              "It looks like the transaction to mint today's NFT could not be submitted! Please try again!"
            );
          }
        }
      } else {
        await recaptchaRef.current?.reset();
        const captcha = await recaptchaRef.current?.executeAsync();
        const service = new LocksmithService();
        const siwe = LocksmithService.createSiweMessage({
          domain: window.location.host,
          uri: window.location.origin,
          address: wallet!,
          chainId: network,
          version: '1',
          statement:
            "I'd like to mint an NFT from the Unlock Protocol Advent Calendar!",
        });
        const message = siwe.prepareMessage();
        const ethersProvider = await wallets[0]?.getEthersProvider();
        if (!ethersProvider) {
          console.error('No ethers provider');
          return;
        }
        const ethersSigner = await ethersProvider.getSigner();
        let signature;
        try {
          signature = await ethersSigner.signMessage(message);
        } catch (error) {
          toast.error(
            "Please make sure you sign this message to confirm you want to open today's gift!"
          );
          setLoading(false);
          return;
        }
        setLoading(true);
        if (!canClaim) {
          // Block spammers who can't claim here...
          toast.success('Your NFT is being minted! Please stand by!', {
            duration: 10000,
          });
          return false;
        }
        const loginResponse = await service.login({
          message,
          signature,
        });
        const { accessToken } = loginResponse.data;
        const response = await service.claim(
          network,
          lock,
          captcha,
          {
            recipient: wallet!,
            data: '',
            referrer:
              (referrer as string) ||
              '0x0000000000000000000000000000000000000000',
          },
          wallet!,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const hash = response.data.transactionHash;

        const explorerLink = explorer(network, hash!);
        toast.success(
          <p>
            Your{' '}
            <Link
              className='inline underline'
              target='_blank'
              href={explorerLink}
            >
              NFT is being minted
            </Link>
            ! Please stand by!
          </p>,
          { duration: 10000 }
        );
        onMinting(hash!);
      }
    } catch (error) {
      toast.error(
        'There was an error minting your NFT. Please refresh the page and try again!'
      );
      setLoading(false);
      console.error(error);
      return false;
    }
    setLoading(false);
  };

  if (loading || !writeContractAsync) {
    return <LoadingDay day={day} size={size} />;
  }

  return (
    <>
      <div style={{ position: 'absolute', left: '-9999px' }}>
        <ReCaptcha
          ref={recaptchaRef}
          sitekey={AppConfig.recaptchaKey}
          size='invisible'
          badge='bottomleft'
        />
      </div>
      <BaseDay
        outterClasses='bg-cream text-primary border-none cursor-pointer'
        onClick={checkout}
        day={day}
        size={size}
      />
    </>
  );
};

interface UnlockableDayProps {
  user: string;
  day: number;
  lock: string;
  network: number;
  hasPreviousDayMembership?: boolean;
  hasMembership?: boolean;
  refetch: any;
  size: DaySize;
}

const UnlockableDay = ({
  refetch,
  user,
  day,
  size,
  lock,
  hasMembership,
  hasPreviousDayMembership,
  network,
}: UnlockableDayProps) => {
  const [hash, setHash] = useState('');

  const { data, status } = useWaitForTransactionReceipt({
    chainId: contracts.network,
    hash: hash as `0x${string}`,
    query: {
      enabled: !!hash,
    },
  });

  useEffect(() => {
    refetch();
  }, [status]);

  const justUnlocked = data?.status == 'success';
  const isLoading = hash && !data;

  if (isLoading) {
    return <LoadingDay day={day} size={size} />;
  }

  if (!hasPreviousDayMembership && day > 1) {
    return <FutureDay day={day} size={size} />;
  }

  if (hasMembership) {
    return (
      <UnlockedDay
        lock={lock}
        network={network}
        justUnlocked={justUnlocked}
        user={user}
        day={day}
        size={size}
      />
    );
  }

  return (
    <Mintable
      onMinting={(hash: string) => {
        setHash(hash);
      }}
      lock={lock}
      network={network}
      day={day}
      size={size}
    />
  );
};

export default UnlockableDay;
