const { network } = require("./config");

function getNetworkName() {
  return network;
}

module.exports = {
  getNetworkName
};
