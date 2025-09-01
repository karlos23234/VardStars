const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with:", deployer.address);

  const Token = await hre.ethers.getContractFactory("BZILToken");
  const token = await Token.deploy(hre.ethers.parseEther("1000000000")); // 1B supply
  await token.waitForDeployment();
  console.log("BZILToken deployed to:", token.target);

  const Presale = await hre.ethers.getContractFactory("Presale");
  const presale = await Presale.deploy(token.target, 30 * 24 * 60 * 60); // 30 days
  await presale.waitForDeployment();
  console.log("Presale deployed to:", presale.target);

  // Transfer tokens to presale
  const tx = await token.transfer(presale.target, hre.ethers.parseEther("500000000"));
  await tx.wait();
  console.log("500M BZIL transferred to Presale contract");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
