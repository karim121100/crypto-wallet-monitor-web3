const { isValidWallet } = require("./wallet");

async function getTransactions(address) {
  if (!isValidWallet(address)) {
    return [];
  }

  // Simulated transaction data
  return [
    { hash: "0xabc123", amount: "0.5 ETH", type: "IN" },
    { hash: "0xdef456", amount: "0.2 ETH", type: "OUT" }
  ];
}

module.exports = {
  getTransactions
};
