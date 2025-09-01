// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Presale is Ownable {
    IERC20 public token;
    uint256 public price; // tokens per ETH

    event Purchased(address indexed buyer, uint256 amountETH, uint256 tokensBought);

    constructor(address tokenAddress, uint256 _price) Ownable(msg.sender) {
        token = IERC20(tokenAddress);
        price = _price;
    }

    function buyTokens() public payable {
        require(msg.value > 0, "Send ETH to buy tokens");
        uint256 tokensToBuy = msg.value * price;
        require(token.balanceOf(address(this)) >= tokensToBuy, "Not enough tokens in contract");
        token.transfer(msg.sender, tokensToBuy);
        emit Purchased(msg.sender, msg.value, tokensToBuy);
    }

    function withdrawETH() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function withdrawTokens(uint256 amount) public onlyOwner {
        token.transfer(owner(), amount);
    }
}
