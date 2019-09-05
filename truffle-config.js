var HDWalletProvider = require("truffle-hdwallet-provider");

const Web3 = require("web3");
const web3 = new Web3();

/*
var keystore = require('fs').readFileSync('keystore/eth_keystore.txt').toString();
console.log(keystore);

var kovanProvider = new HDWalletProvider(keystore, "https://kovan.infura.io/GjyHpPqLZffsizIx6ieH");
var ropstenProvider = new HDWalletProvider(keystore, "https://ropsten.infura.io/GjyHpPqLZffsizIx6ieH");
var rinkebyProvider = new HDWalletProvider(keystore, "https://rinkeby.infura.io/GjyHpPqLZffsizIx6ieH");
*/

var keystore = "charge obey impact capital decline spread book scene else foil trumpet nice"
var ropstenProvider = new HDWalletProvider(keystore, "https://ropsten.infura.io/v3/7897a12f239d4fc19ad68fd5560de514");

module.exports = {
  networks: {
    development: {
      host: "192.168.0.147",
      port: 8545,
      network_id: "*", // Match any network id
      gas : 400000,
    },/*,
    kovan: {
      provider: kovanProvider,
      network_id: 3,
      gas: 4600000,
      gasPrice: web3.toWei("20", "gwei")
    },
    ropsten: {
      provider: ropstenProvider,
      network_id: 2,
      gas: 4600000,
      gasPrice: web3.toWei("120", "gwei")
    },
    rinkeby: {
      provider: rinkebyProvider,
      network_id: 1,
      gas: 4600000,
      gasPrice: web3.toWei("20", "gwei")
    }*/
    ropsten: {
      provider: ropstenProvider,
      network_id: 3,
    },
    geth : {
      host : "192.168.0.147",
      port : 8545,
      network_id: "*",
    }

  },

  

  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },

compilers : {
  solc : {
    version: "^0.4.24",
  }
}
};
