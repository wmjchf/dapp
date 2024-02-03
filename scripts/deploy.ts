import { ethers } from "hardhat";

async function main() {
  const TokenContract = await ethers.getContractFactory("DogWangWallet");
  const dogwangWallet = await TokenContract.deploy();
  const address = await dogwangWallet.getAddress();
  console.log(address);
}

main();
