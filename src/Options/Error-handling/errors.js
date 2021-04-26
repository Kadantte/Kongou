class KongouError extends Error {
  constructor(code, message) {
    super(`${message.blue} [${code}]`);
    this.name = "KongouError";
  }
}

class KongouClientError extends KongouError {
  constructor(code, message) {
    super(code.red, message);
    this.name = "KongouClientError";
  }
}

class KongouServerError extends KongouError {
  constructor(code, message) {
    super(code, message);
    this.name = "KongouServerError";
  }
}

module.exports = { KongouClientError, KongouServerError };
