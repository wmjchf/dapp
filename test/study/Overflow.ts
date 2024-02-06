import { ethers } from "hardhat";
import { expect } from "chai";
import { Overflow } from "../../typechain-types";

describe("测试溢出合约", function () {
  let contract: Overflow;

  before(async () => {
    const Overflow = await ethers.getContractFactory("Overflow");
    contract = await Overflow.deploy();
  });
  it("10+20 = 30", async function () {
    const sum = await contract.add(10, 20);
    expect(sum).to.equal(30);
  });
  it("255+1溢出，执行失败", async function () {
    await expect(contract.add(255, 1)).reverted;
  });
  it("40-20 = 20", async function () {
    const sum = await contract.sub(40, 20);
    expect(sum).to.equal(20);
  });
  it("0-1溢出，执行失败", async function () {
    await expect(contract.sub(0, 1)).reverted;
  });
});
