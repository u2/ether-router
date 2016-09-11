contract Identity {
  function() {
    uint r;
    assembly {
      let destination := calldataload(4)
      calldatacopy(mload(0x40), 0, calldatasize)
      r := delegatecall(sub(gas, 10000), destination, mload(0x40), calldatasize, mload(0x40), 1024)
    }

    if (r != 1) { throw;}

    assembly {
      return(mload(0x40), 1024)
    }
  }
}
