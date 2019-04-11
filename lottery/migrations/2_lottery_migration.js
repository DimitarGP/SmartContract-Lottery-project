const Lottety = artifacts.require("Lottery");

module.exports = function(deployer) {
  deployer.deploy(Lottery);
};
