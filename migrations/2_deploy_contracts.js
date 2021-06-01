var ZombieFactory = artifacts.require("./zombiefactory.sol");
var ZombieHelper = artifacts.require("./zombiehelper.sol");
var ZombieFeeding = artifacts.require("./zombiefeeding.sol");
var ZombieAttack = artifacts.require("./zombieattack.sol");
var ZombieOwnership = artifacts.require("./zombieownership.sol");

module.exports = function(deployer) {
	deployer.deploy(ZombieFactory);
	deployer.deploy(ZombieHelper);
	deployer.deploy(ZombieFeeding);
	deployer.deploy(ZombieAttack);
	deployer.deploy(ZombieOwnership);
};