function isValidWallet(address) {
  return address && address.startsWith("0x") && address.length === 42;
}

module.exports = {
  isValidWallet
};
