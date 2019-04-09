const Migrations = artifacts.require("Migrations");
const Verifier = artifacts.require("./Verifier.sol");

module.exports = function(deployer, accounts) {
    deployer.deploy(Migrations);
    deployer.deploy(Verifier);
}