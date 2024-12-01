import { networks } from "@unlock-protocol/networks";
import { Chain } from "wagmi";
import { configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import contracts from "./contracts";

const chains = Object.values(networks)
  .map((item: any) => {
    let provider = item.provider;
    return {
      id: item?.id,
      rpcUrls: {
        default: {
          http: [provider],
        },
        public: {
          http: [provider],
        },
      },
      name: item.name,
      testnet: item.isTestNetwork,
      blockExplorers: {
        default: item?.explorer?.base,
      },
      nativeCurrency: item.nativeCurrency,
      network: item.network,
    } as Chain;
  })
  .filter((chain) => {
    return chain.id == 1 || chain.id === contracts.network;
  });

export const configureChainsConfig = configureChains(chains, [
  publicProvider(),
]);
