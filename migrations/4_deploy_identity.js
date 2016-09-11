module.exports = function(deployer) {
  deployer.deploy(Identity);
  deployer.deploy(MyList);
  deployer.deploy(MyOne);
  deployer.deploy(MyAnswer);
  deployer.deploy(IdentityTwo);
};
