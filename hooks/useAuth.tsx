import { usePrivy, useLogin } from "@privy-io/react-auth";
import { useEffect, useMemo, useRef } from "react";
import { useAccount } from "wagmi";
import { toast } from "react-hot-toast";

export function useAuth() {
  const { linkEmail, user, logout } = usePrivy();
  const { address: wallet } = useAccount();
  const errorShown = useRef(false);
  const isMounted = useRef(false);
  const toastId = useRef<string | undefined>();
  const { login: privyLogin } = useLogin({
    onError: (error) => {
      if (isMounted.current && !errorShown.current && !toastId.current) {
        toastId.current = toast.error("Failed to connect wallet");
        console.error("Privy login error:", error);
        errorShown.current = true;
      }
    },
  });

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      errorShown.current = false;
      if (toastId.current) {
        toast.dismiss(toastId.current);
      }
    };
  }, []);
  // useEffect(() => {
  //   if (user) {
  //     if (!user?.wallet?.address) {
  //       // We have no wallet for that user. What can we do?
  //       console.error("No wallet for user!");
  //     } else {
  //       // We have a wallet address. Let's ensure that the connected wallet matches it!
  //       if (user?.wallet?.address !== wallet?.address) {
  //         let found = false;
  //         // If not, circle thru until we find the right one!
  //         wallets.forEach((w) => {
  //           if (w.address === user?.wallet?.address) {
  //             found = true;
  //             setActiveWallet(w);
  //           }
  //         });
  //         if (!found) {
  //           // console.error("No wallet matches the user's wallet!")
  //           // We have a user that is connected but no matching wallet. What do we do?
  //         }
  //       } else {
  //         // All good, user connected to the right wallet!
  //       }
  //     }
  //   } else {
  //     console.log({ wallet });
  //     // No privy user. If we have a wallet, disconnect it
  //     if (wallet) {
  //       // Disconnect any wallet!
  //       setActiveWallet(undefined);
  //     } else {
  //       // No wallet, no user. All good!
  //     }
  //   }
  // }, [wallet, user, wallets]);

  useEffect(() => {
    if (user && !user?.email) {
      if (user?.google?.email) {
        console.log("We have a google email but not user email!");
      } else {
        linkEmail();
      }
    }
  }, [user]);

  const canClaim = useMemo(() => {
    if (!user?.email?.address) {
      return false;
    }
    if (user.email.address.match(/@skiff\.com$/)) {
      return false;
    }
    return true;
  }, [user]);

  const login = async () => {
    // if (user) {
    //   if (user?.wallet?.address !== wallet?.address) {
    //     let found = false;
    //     // If not, circle thru until we find the right one!
    //     wallets.forEach((w) => {
    //       if (w.address === user?.wallet?.address) {
    //         found = true;
    //         setActiveWallet(w);
    //       }
    //     });
    //     if (!found) {
    //       if (user.wallet?.walletClientType !== "privy") {
    //         await linkWallet();
    //       } else {
    //         // We will have to wait for user to log back in!
    //         logout();
    //       }
    //     }
    //   }
    // } else {
    privyLogin();
    // }
  };

  return {
    linkEmail,
    user,
    login,
    logout,
    wallet: user ? wallet : null,
    canClaim,
  };
}
