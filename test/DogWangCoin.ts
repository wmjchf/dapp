import { ethers } from "hardhat";
import { expect } from "chai";

describe("DogWangCoin contract", function () {
  //   it("Deployment Contract", async function () {
  //     const [owner] = await ethers.getSigners();
  //     const One = await ethers.getContractFactory("One");
  //     const Contract = await One.deploy();
  //     const ca = await Contract.getAddress();
  //     console.log("Owner Address is %s", owner.address);
  //     console.log("Contract Address is %s", ca);
  //     // expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  //   });
  // it("GetBlockNumber", async function name() {
  //   const number = await ethers.provider.getBlockNumber();
  //   console.log("BlockNumber is %s", number);
  //   const block = await ethers.provider.getBlock(number);
  //   console.log(block);
  // });
  // it("getSigners", async function name() {
  //   const signers = await ethers.getSigners();
  //   console.log(signers[0], "dfd");
  // });
  let owner;
  let address1;
  let address2;
  let address3;
  let TokenContract = null;
  let Token = null;
  beforeEach(async function () {
    TokenContract = await ethers.getContractFactory("DogWangCoin");
    [owner, address1, address2, address3] = await ethers.getSigners();
    Token = await TokenContract.deploy();
  });
  describe("Deployment", function () {
    // it("总发行量等于合约主人的余额", async function () {
    //   const balance = await Token?.balanceOf(owner.address);
    //   const totalSupply = await Token?.totalSupply();
    //   expect(totalSupply).to.equal(balance);
    // });
  });
});
