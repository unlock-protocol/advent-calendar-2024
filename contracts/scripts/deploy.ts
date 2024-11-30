const { network, unlock, ethers } = require("hardhat");
import deploy from "../lib/deploy";

/**
 * main!
 * @returns
 */
async function main() {
  const [user] = await ethers.getSigners();
  const { chainId } = await ethers.provider.getNetwork();
  console.log(`Deploying from ${await user.getAddress()} on ${chainId}`);

  if (Number(chainId) === 8453) {
    const [locks, hook] = await deploy(
      unlock,
      "0x4266b16A605cF3360a074f9FfE24319C5Df636e8",
      new Date("2024-12-01 12:00:00").getTime() / 1000
    );
  } else if (Number(chainId) === 84532) {
    const [locks, hook] = await deploy(
      unlock,
      "0x909f61fd0BCb8C5e094478f79C212DB68CF1D7EA",
      new Date("2024-11-25").getTime() / 1000
    );
  } else if (Number(chainId) === 31337) {
    const [locks, hook] = await deploy(
      unlock,
      undefined, // No hook yet!
      new Date("2024-11-25").getTime() / 1000
    );
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
