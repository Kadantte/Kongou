const { KongouClientError } = require("../errors.js");
function idCheck(id) {
  if (id !== undefined) {
    if (id.length === 0) {
      throw new KongouClientError("Input Error", "No ID provided");
    }
    if (isNaN(id)) {
      throw new KongouClientError("Input Error", "ID should be a number.");
    }

    if (typeof id !== "number") {
      throw new KongouClientError("Input Error", "ID should be a number.");
    }
  }
}
module.exports = { idCheck };
