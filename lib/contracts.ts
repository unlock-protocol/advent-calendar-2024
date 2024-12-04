import { AppConfig } from "./AppConfig";

const contracts = {
  network: 8453,
  hook: {
    address: "0x4266b16A605cF3360a074f9FfE24319C5Df636e8",
    ABI: [
      {
        inputs: [{ internalType: "uint256", name: "day", type: "uint256" }],
        name: "BAD_DAY",
        type: "error",
      },
      {
        inputs: [{ internalType: "uint256", name: "day", type: "uint256" }],
        name: "MISSING_PREVIOUS_DAY",
        type: "error",
      },
      {
        inputs: [{ internalType: "uint256", name: "day", type: "uint256" }],
        name: "TOO_EARLY",
        type: "error",
      },
      {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "dayByLock",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address[]", name: "_locks", type: "address[]" },
          { internalType: "uint256", name: "_start", type: "uint256" },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "", type: "address" },
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "address", name: "", type: "address" },
          { internalType: "bytes", name: "", type: "bytes" },
        ],
        name: "keyPurchasePrice",
        outputs: [
          { internalType: "uint256", name: "minKeyPrice", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "lockByDay",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "address", name: "", type: "address" },
          { internalType: "address", name: "recipient", type: "address" },
          { internalType: "address", name: "", type: "address" },
          { internalType: "bytes", name: "", type: "bytes" },
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        name: "onKeyPurchase",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "start",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "winnerIndices",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        name: "winners",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
};

// if (AppConfig.environment !== "production") {
//   contracts.network = 84532;
//   contracts.hook.address = "0x909f61fd0BCb8C5e094478f79C212DB68CF1D7EA";
// }

export default contracts;
