contract MyList {
  address resolver;
  address creator;
  mapping (uint => uint[]) data;

  function setList(address _a, uint key, uint[] _data) {
    data[key] = _data;
  }

  function getLength(address _a, uint key) returns(uint) {
    return data[key].length;
  }

  function getReturnSize(address _a, uint key) returns(uint) {
    // Returning a dynamically-sized array requires two extra slots.
    // One for the data location pointer, and one for the length.
    return data[key].length + 2;
  }

  function getAll(address _a, uint key) returns(uint[]) {
    return data[key];
  }

  function() returns(uint) {
    return 43;
  }
}
