var CareToken = artifacts.require("./CareToken.sol");

module.exports = function(deployer) {
  deployer.deploy(CareToken);
};