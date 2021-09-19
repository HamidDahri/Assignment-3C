const Hamid = artifacts.require("Hamid");

module.exports = async function (deployer,network,accounts) {
  await deployer.deploy(Hamid);
};