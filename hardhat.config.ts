import { HardhatUserConfig } from "hardhat/config";
// 必须安装引入，不然etherjs没有
import "@nomicfoundation/hardhat-toolbox";
const { privateKey, forkRPC, goerliRPC } = require("./private-config");
const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      forking: {
        url: forkRPC,
      },
    },
    goerli: {
      url: goerliRPC,
      accounts: [privateKey],
    },
  },
};

export default config;
