import { useState } from "react";
import { ethers } from "ethers";

const PRESALE_ADDRESS = "YOUR_PRESALE_CONTRACT_ADDRESS";
const PRESALE_ABI = [
  "function buyTokens() payable",
  "function rate() view returns (uint256)",
];

function App() {
  const [account, setAccount] = useState(null);

  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      setAccount(await signer.getAddress());
    } else {
      alert("Please install MetaMask!");
    }
  }

  async function buyTokens() {
    if (!account) return alert("Connect wallet first");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const presale = new ethers.Contract(PRESALE_ADDRESS, PRESALE_ABI, signer);
    const tx = await presale.buyTokens({ value: ethers.parseEther("0.01") });
    await tx.wait();
    alert("Tokens purchased!");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">BullZilla Presale</h1>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <button onClick={connectWallet} className="px-4 py-2 bg-blue-500 rounded">
          Connect Wallet
        </button>
      )}
      <button onClick={buyTokens} className="px-4 py-2 mt-4 bg-green-500 rounded">
        Buy 0.01 ETH worth of $BZIL
      </button>
    </div>
  );
}

export default App;
