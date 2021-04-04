const { KongouServerError } = require('../errors');
function resultsCheck(rest) {
  if (rest.result !== undefined) {
    if (rest.result.length === 0) {
      throw new KongouServerError(
        "Output Error",
        "No results for the given keywords"
      );
    }
  }
}
module.exports = { resultsCheck };
