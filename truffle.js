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
      gas: 450000, // Note: lower gas limit when failing on contract deployment.
      from:'0xB9A9055c1e696b13C762a3F4358378f2bC35208e'
    },
    rinkeby: {
      network_id: 4,
      provider: new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/'),
      gas: 450000
    }
  }
}
