import { usePrivy, useLogin } from "@privy-io/react-auth";
import { useEffect, useMemo, useRef } from "react";
import { useAccount } from "wagmi";

export function useAuth() {
  const { linkEmail, user, logout, authenticated, linkWallet } = usePrivy();
  const { address: wallet } = useAccount();
  const { login: privyLogin } = useLogin({
    onError: (error) => {
      console.error("Privy login error: ", error);
    },
  });
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

  const login = () => {
    if (authenticated === true) {
      linkWallet();
    } else {
      privyLogin();
    }
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
