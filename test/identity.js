contract('Identity', function(accounts) {
  it("should allow upgrades that add storage data", function(done) {
    one = MyOne.deployed();
    Identity.new().
      then(function(identity) {
        var fake_one = MyOne.at(identity.address);
        fake_one.setOne(one.address, 1).
          then(function() { return fake_one.getOne.call(one.address) }).
          then(function(result) {
            assert.equal(result, 1);
            return fake_one.setOne(one.address, 2);
          }).
          then(function() {
            return fake_one.getOne.call(one.address)
          }).
          then(function(result) {
            assert.equal(result, 2);
            done();
          }).catch(done)
      }).catch(done)
  });

  it("should allow variable-return functions to lookup their return size if possible", function(done) {
    var key = 42;
    list = MyList.deployed();
    Identity.new().
      then(function(identity) {
        var fake_list = MyList.at(identity.address);
        fake_list.setList(list.address, key, [0,1,2,3,4,5,6]).
          then(function() { return fake_list.getAll.call(list.address, key) }).
          then(function(result) {
            assert.equal(result.length, 7);
            assert.equal(result[0], 0);
            assert.equal(result[1], 1);
            assert.equal(result[2], 2);
            assert.equal(result[3], 3);
            assert.equal(result[4], 4);
            assert.equal(result[5], 5);
            assert.equal(result[6], 6);
            done();
          }).catch(done)
      }).catch(done)
  });
});
