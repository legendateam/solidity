require("@nomicfoundation/hardhat-toolbox");
const { net_key, ETHERSCAN__API_KEY, network_path, default_mnemonic, mnemonic_phrase } = require('./configs/configs');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  etherscan: {
    apiKey: ETHERSCAN__API_KEY
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic: default_mnemonic,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20
      },
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    sepolia: {
      url: network_path,
      accounts: {
        mnemonic: mnemonic_phrase,
      },
    },
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}