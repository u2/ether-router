contract IdentityTwo {
  function() {
    uint r;
    assembly {
      let destination := calldataload(4)
      calldatacopy(mload(0x40), 0, 4)
      calldatacopy(mload(0x44), 36, sub(calldatasize, 36))
      r := delegatecall(sub(gas, 10000), destination, mload(0x40), sub(calldatasize, 32), mload(0x40), 32)
    }

    if (r != 1) { throw;}

    assembly {
      return(mload(0x40), 32)
    }
  }
}
