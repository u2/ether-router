contract Sample1 {
  mapping (uint => bool) doOnce;
  uint _actionNumber;

  function() {
    var a = doOnce[_actionNumber];
    if (a == true) { throw; }
    a = true;

    _actionNumber++;
 }

  function get(uint i) returns (bool b){
    b = doOnce[i];
  }
}