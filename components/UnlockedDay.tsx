/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { PublicLock } from "@unlock-protocol/contracts";
import BaseDay from "./BaseDay";
import { useContractRead } from "wagmi";
import Image from "next/image";
import { DaySize } from "../layout/daySizes";
import Modal from "./Modal";
interface UnlockedDayProps {
  day: number;
  user: any;
  lock: string;
  network: number;
  justUnlocked?: boolean;
  size?: DaySize;
}

const UnlockedDay = ({
  lock,
  network,
  user,
  size,
  day,
  justUnlocked,
}: UnlockedDayProps) => {
  const [showModal, setShowModal] = useState(justUnlocked);

  const { data: tokenId } = useContractRead({
    address: lock as `0x${string}`,
    abi: PublicLock.abi,
    functionName: "tokenOfOwnerByIndex",
    args: [user, 0],
    chainId: network,
  });

  return (
    <>
      <BaseDay
        outterClasses={`border-[#75797E] bg-tertiary text-white cursor-pointer flex items-center justify-center`}
        day={day}
        size={size}
        hideDay={true}
        onClick={() => {
          setShowModal(true);
        }}
      >
        <Image
          src={`/images/nft/${day}.png`}
          alt={`NFT image for Day ${day}`}
          fill
          className="rounded-xl object-cover"
        />
      </BaseDay>
      {showModal ? (
        <Modal
          lock={lock}
          network={network}
          tokenId={tokenId as string}
          user={user}
          day={day}
          setShowModal={setShowModal}
        />
      ) : null}
    </>
  );
};

export default UnlockedDay;
