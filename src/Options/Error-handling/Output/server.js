const { KongouServerError } = require("../errors");
function serverCheck(rest) {
  if (rest.status !== undefined) {
    if (rest.status === 404) {
      throw new KongouServerError(rest.status, rest.statusText);
    }
  }
}
module.exports = { serverCheck };
