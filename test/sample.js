// http://ethfans.org/rubyu2/articles/196
contract('Sample1', function(accounts) {
  it("test set bool in map", function(){
    var sample1 = Sample1.deployed();
    return sample1.get.call(0).then(function(b){
      assert.equal(b, false);
      return web3.eth.sendTransaction({ from: web3.eth.accounts[0], to: sample1.address });
    }).then(function(){
      return sample1.get.call(0);
    }).then(function(nb){
      assert.equal(nb, false);
    })
  });
});

contract('Sample2', function(accounts) {
  it("test set bool in map", function(){
    var sample2 = Sample2.deployed();
    return sample2.get.call(0).then(function(b){
      assert.equal(b, false);
      return web3.eth.sendTransaction({ from: web3.eth.accounts[0], to: sample2.address });
    }).then(function(){
      return sample2.get.call(0);
    }).then(function(nb){
      assert.equal(nb, true);
    })
  });
});

