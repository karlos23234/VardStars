const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with:", deployer.address);

  const BZILToken = await hre.ethers.getContractFactory("BZILToken");
  const token = await BZILToken.deploy(1000000 * 10**18);
  await token.deployed();
  console.log("BZILToken deployed to:", token.address);

  const Presale = await hre.ethers.getContractFactory("Presale");
  const presale = await Presale.deploy(token.address, 1000);
  await presale.deployed();
  console.log("Presale deployed to:", presale.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
