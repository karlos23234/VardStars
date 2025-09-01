
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BZILToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("BullZilla Token", "BZIL") {
        _mint(msg.sender, initialSupply);
    }
}

contract Presale is Ownable {
    BZILToken public token;
    uint256 public rate = 100000; // 1 ETH = 100,000 BZIL
    uint256 public endTime;

    event TokensPurchased(address indexed buyer, uint256 amountETH, uint256 amountTokens);

    constructor(BZILToken _token, uint256 _duration) {
        token = _token;
        endTime = block.timestamp + _duration;
    }

    receive() external payable {
        buyTokens();
    }

    function buyTokens() public payable {
        require(block.timestamp < endTime, "Presale ended");
        require(msg.value > 0, "Send ETH to buy tokens");

        uint256 tokenAmount = msg.value * rate;
        token.transfer(msg.sender, tokenAmount);

        emit TokensPurchased(msg.sender, msg.value, tokenAmount);
    }

    function withdrawETH() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
