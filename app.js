const { getWalletBalance } = require("./balance");
const { getTransactions } = require("./transactions");
const { logInfo } = require("./logger");

const walletAddress = "0xYourWalletAddressHere";

async function startApp() {
  logInfo("Starting Crypto Wallet Monitor");

  const balance = await getWalletBalance(walletAddress);
  logInfo("Wallet Balance: " + balance);

  const txs = await getTransactions(walletAddress);
  logInfo("Recent Transactions:");
  console.log(txs);
}

startApp();
