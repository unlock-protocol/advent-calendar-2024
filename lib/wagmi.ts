import { createConfig } from "@privy-io/wagmi";
import { base, baseSepolia } from "viem/chains";
import { http } from "wagmi";

export const wagmiConfig = createConfig({
  chains: [base, baseSepolia], // Pass your required chains as an array
  transports: {
    [base.id]: http("https://rpc.unlock-protocol.com/8453"),
    [baseSepolia.id]: http("https://rpc.unlock-protocol.com/84532"),
  },
});
