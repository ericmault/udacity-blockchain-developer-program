var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "box ocean vacuum skirt dust glory arch sell leader brother rebuild oval";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545/", 0, 50);
      },
      network_id: '*',
      gas: 5999999
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};