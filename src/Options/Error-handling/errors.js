export class KongouError extends Error {
  constructor(code, message) {
    super(`${message} [${code}]`);
    this.name = "KongouError";
  }
}

export class KongouClientError extends KongouError {
  constructor(code, message) {
    super(code, message);
    this.name = "KongouClientError";
  }
}

export class KongouServerError extends KongouError {
  constructor(code, message) {
    super(code, message);
    this.name = "KongouServerError";
  }
}
