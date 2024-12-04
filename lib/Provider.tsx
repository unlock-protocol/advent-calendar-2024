import { PrivyProvider } from "@privy-io/react-auth";
import { WagmiProvider } from "@privy-io/wagmi";
import { base, baseSepolia } from "viem/chains";

import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import { queryClient } from "./reactQuery";
import { DefaultSeo } from "next-seo";
import { DEFAULT_SEO } from "./seo";
import * as RadixToolTip from "@radix-ui/react-tooltip";
import { wagmiConfig } from "./wagmi";

export const Provider = ({ children }: { children?: ReactNode }) => {
  const seo = { ...DEFAULT_SEO };

  return (
    <PrivyProvider
      appId="clpjz90qo00k2if0fl2coy0ns"
      config={{
        defaultChain: base,
        supportedChains: [base, baseSepolia],
        embeddedWallets: {
          createOnLogin: "users-without-wallets", // defaults to 'off'
          noPromptOnSignature: true, // defaults to false
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          <DefaultSeo {...seo} />
          <RadixToolTip.Provider delayDuration={100}>
            {children}
            <Toaster
              toastOptions={{
                style: {
                  background: "white",
                  color: "black",
                },
              }}
            />
          </RadixToolTip.Provider>
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
};

export default Provider;
