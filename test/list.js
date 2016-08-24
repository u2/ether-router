// http://ethfans.org/posts/196
contract('List', function(accounts) {
  it("test set array in map", function(){
    var list = List.deployed();
    return list.getAll.call(0).then(function(b){
      assert.deepEqual(b, []);
      return list.setList.sendTransaction(0, [1,2,3], { from: web3.eth.accounts[0], to: list.address });
    }).then(function(){
      return list.getAll.call(0);
    }).then(function(nb){
      assert.equal(nb[0].toString(), '1');
      assert.equal(nb[1].toString(), '2');
      assert.equal(nb[2].toString(), '3');
    })
  });
});
