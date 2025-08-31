import React, { useState } from "react";
import { ethers } from "ethers";

// 👉 Քո Smart Contract Address
const CONTRACT_ADDRESS = "0xYourContractAddressHere";

// 👉 Քո Token Presale Contract ABI
const CONTRACT_ABI = [
  "function buyTokens(address referral) public payable",
  "function buyWithUSDT(uint256 amount, address referral) public",
];

// 👉 USDT Token Contract (ERC-20) — Ethereum mainnet example
const USDT_ADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

// 👉 ERC20 Minimal ABI
const ERC20_ABI = [
  "function approve(address spender, uint256 amount) public returns (bool)",
  "function allowance(address owner, address spender) public view returns (uint256)",
  "function balanceOf(address account) external view returns (uint256)",
  "function decimals() external view returns (uint8)",
];

export default function BullZillaDapp() {
  const [account, setAccount] = useState(null);
  const [amountEth, setAmountEth] = useState("0.01");
  const [amountUSDT, setAmountUSDT] = useState("10");
  const [referral, setReferral] = useState("");
  const [loading, setLoading] = useState(false);

  // --- connect wallet ---
  async function connectWallet() {
    if (!window.ethereum) return alert("Please install MetaMask!");
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } catch (err) {
      console.error(err);
      alert("Wallet connection failed!");
    }
  }

  // --- buy with ETH ---
  async function buyWithEth() {
    if (!window.ethereum) return alert("Please install MetaMask!");
    setLoading(true);

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      const value = ethers.parseEther(amountEth);

      const tx = await contract.buyTokens(referral || ethers.ZeroAddress, {
        value,
      });

      console.log("ETH Tx sent:", tx.hash);
      alert(`Transaction sent: ${tx.hash}`);

      await tx.wait();
      alert("✅ ETH Purchase confirmed!");
    } catch (err) {
      console.error(err);
      alert("❌ ETH Purchase failed!");
    } finally {
      setLoading(false);
    }
  }

  // --- buy with USDT ---
  async function buyWithUsdt() {
    if (!window.ethereum) return alert("Please install MetaMask!");
    setLoading(true);

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const user = await signer.getAddress();

      // USDT Contract
      const usdt = new ethers.Contract(USDT_ADDRESS, ERC20_ABI, signer);
      const decimals = await usdt.decimals();
      const amount = ethers.parseUnits(amountUSDT, decimals);

      // Approve if needed
      const allowance = await usdt.allowance(user, CONTRACT_ADDRESS);
      if (allowance < amount) {
        const approveTx = await usdt.approve(CONTRACT_ADDRESS, amount);
        console.log("Approval Tx:", approveTx.hash);
        await approveTx.wait();
        alert("✅ Approved USDT spending");
      }

      // Call contract
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      const tx = await contract.buyWithUSDT(amount, referral || ethers.ZeroAddress);

      console.log("USDT Tx sent:", tx.hash);
      alert(`Transaction sent: ${tx.hash}`);

      await tx.wait();
      alert("✅ USDT Purchase confirmed!");
    } catch (err) {
      console.error(err);
      alert("❌ USDT Purchase failed!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-slate-800 rounded-xl p-6 space-y-6">
        <h1 className="text-2xl font-bold">🚀 Buy BullZilla ($BZIL)</h1>

        {!account ? (
          <button
            onClick={connectWallet}
            className="w-full px-4 py-2 bg-amber-500 text-black rounded-lg"
          >
            Connect Wallet
          </button>
        ) : (
          <div className="space-y-4">
            <p className="text-sm">Connected: {account}</p>

            {/* ETH BUY */}
            <div className="p-4 bg-slate-700 rounded-lg">
              <h2 className="font-semibold mb-2">Buy with ETH</h2>
              <input
                type="number"
                value={amountEth}
                onChange={(e) => setAmountEth(e.target.value)}
                className="w-full p-2 rounded text-black"
              />
              <button
                onClick={buyWithEth}
                disabled={loading}
                className="mt-3 w-full px-4 py-2 bg-emerald-500 text-black rounded-lg"
              >
                {loading ? "Processing..." : "Buy with ETH"}
              </button>
            </div>

            {/* USDT BUY */}
            <div className="p-4 bg-slate-700 rounded-lg">
              <h2 className="font-semibold mb-2">Buy with USDT (ERC-20)</h2>
              <input
                type="number"
                value={amountUSDT}
                onChange={(e) => setAmountUSDT(e.target.value)}
                className="w-full p-2 rounded text-black"
              />
              <button
                onClick={buyWithUsdt}
                disabled={loading}
                className="mt-3 w-full px-4 py-2 bg-blue-400 text-black rounded-lg"
              >
                {loading ? "Processing..." : "Buy with USDT"}
              </button>
            </div>

            {/* REFERRAL */}
            <div>
              <label className="block mb-2">Referral (optional)</label>
              <input
                type="text"
                value={referral}
                onChange={(e) => setReferral(e.target.value)}
                className="w-full p-2 rounded text-black"
                placeholder="0x000... (optional)"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
