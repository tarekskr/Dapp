const Ownable = artifacts.require("zeppelin-solidity/contracts/ownership/Ownable.sol");
const Destructible = artifacts.require("zeppelin-solidity/contracts/lifecycle/Destructible.sol");
const Authentication = artifacts.require("./Authentication.sol");

module.exports = function(deployer) {
  deployer.deploy(Ownable);
  deployer.link(Ownable, Destructible);
  deployer.deploy(Destructible);
  deployer.link(Destructible, Authentication);
  deployer.deploy(Authentication);
};
