pragma solidity ^0.4.4;
import 'zeppelin-solidity/contracts/token/StandardToken.sol';

contract CareToken is StandardToken {
  string public name = 'CareToken';
  string public symbol = 'CT';
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = 12000;

  function CareToken() {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }



}