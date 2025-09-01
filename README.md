# BullZilla Presale Project

This project includes:
- Solidity contracts (BZILToken + Presale)
- Hardhat deployment scripts
- React frontend with ethers.js
- Ready for GitHub Pages deployment

## Setup

```bash
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
```

Update `frontend/src/App.jsx` with your deployed `PRESALE_ADDRESS`.

## Frontend

```bash
cd frontend
npm install
npm run dev
```
