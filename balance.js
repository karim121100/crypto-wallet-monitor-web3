const { apiUrl } = require("./config");
const { isValidWallet } = require("./wallet");

async function getWalletBalance(address) {
  if (!isValidWallet(address)) {
    return "Invalid wallet address";
  }

  // Simulated API call
  return "1.234 ETH";
}

module.exports = {
  getWalletBalance
};
