var HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = process.env.TEST_MNEMONIC || 'caretoken caretoken caretoken caretoken caretoken caretoken caretoken caretoken caretoken caretoken caretoken caretoken';

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    kovan: {
      network_id: 42,
      provider: new HDWalletProvider(mnemonic, 'https://kovan.infura.io'),
      gas: 4.5e6
    },
    rinkeby: {
      network_id: 4,
      provider: new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/'),
      gas: 4.5e6
    }
  }
}
