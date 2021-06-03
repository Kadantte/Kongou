const { KongouClientError } = require("../errors.js");
module.exports = function idCheck(id) {
  if (id !== undefined) {
    if (id.length == 0) {
      throw new KongouClientError("Input Error", `ID length is ${id.length}`);
    }
    if (isNaN(parseInt(id))) {
      throw new KongouClientError("Input Error", "ID should be a number.");
    }
  } else throw new KongouClientError("Input Error", "No ID provided");
};
