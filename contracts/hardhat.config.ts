import { HardhatUserConfig } from "hardhat/config";
import "@unlock-protocol/hardhat-plugin";
import "@openzeppelin/hardhat-upgrades";
import "@nomicfoundation/hardhat-verify";
import "@nomicfoundation/hardhat-chai-matchers";
import { networks } from "@unlock-protocol/networks";

const unlockNetworks = Object.keys(networks).reduce((prev, current) => {
  const network = networks[current];
  return {
    ...prev,
    [network.chain]: {
      chainId: Number(network.id),
      url: network.provider,
      accounts:
        process.env.DEPLOYER_PRIVATE_KEY || process.env.TESTER_PRIVATE_KEY
          ? [process.env.DEPLOYER_PRIVATE_KEY || process.env.TESTER_PRIVATE_KEY]
          : [],
    },
  };
}, {});

const config: HardhatUserConfig = {
  networks: unlockNetworks,
  solidity: "0.8.17",
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      base: "F9E5R4E8HIJQZMRE9U9IZMP7NVZ2IAXNB8",
      baseSepolia: "F9E5R4E8HIJQZMRE9U9IZMP7NVZ2IAXNB8",
    },
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true,
  },
};

export default config;
