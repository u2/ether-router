contract Sample2 {
  struct info { bool doOnce; }
  mapping (uint => info) infoMap;
  uint _actionNumber;

  function() {
    var a = infoMap[_actionNumber];
    if (a.doOnce == true) { throw; }
    a.doOnce = true;

    _actionNumber++;

  }
  function get(uint i) returns (bool b){
    var a = infoMap[i];
    b = a.doOnce;
  }
}