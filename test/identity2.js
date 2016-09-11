contract('IdentityTwo', function(accounts) {
  it("should allow upgrades that add storage data", function(done) {
    var abi = [{"constant":false,"inputs":[{"name":"_a","type":"address"}],"name":"getOne","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_a","type":"address"},{"name":"_one","type":"uint256"}],"name":"setOne","outputs":[],"type":"function"}]
    one = One.deployed();
    IdentityTwo.new().
      then(function(identity) {
        fake_one = MyOne.at(identity.address);
        console.log('one.address', one.address);
        fake_one.setOne(one.address, 1, { from: web3.eth.accounts[0], gas: 1000000 }).
          then(function() { return fake_one.getOne.call(one.address) }).
          then(function(result) {
            assert.equal(result, 1);
            return fake_one.setOne(one.address, 2, { from: web3.eth.accounts[0], gas: 1000000 });
          }).
          then(function() {
            return fake_one.getOne.call(one.address);
          }).
          then(function(result) {
            assert.equal(result, 2);
            done();
          }).catch(done)
      }).catch(done)
  });
});
