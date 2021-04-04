const colors = require("colors");
class KongouError extends Error {
  constructor(code, message) {
    super(`${message.blue} [${code}]`);
    this.name = "KongouError".cyan;
  }
}

class KongouClientError extends KongouError {
  constructor(code, message) {
    super(code.red, message);
    this.name = "KongouClientError".cyan;
  }
}

class KongouServerError extends KongouError {
  constructor(code, message) {
    super(code, message);
    this.name = "KongouServerError".cyan;
  }
}

module.exports = {KongouClientError, KongouServerError};