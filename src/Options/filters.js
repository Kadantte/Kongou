const usrlink = "https://nhentai.net";
const { KongouClientError, KongouServerError } = require("./errors.js");
function linkify(id) {
  return usrlink + "/g/" + id;
}
function tagify(link) {
  return usrlink + link;
}
function capitalize(str) {
  const string = str
    .toString()
    .split("_")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    );
  return string[0];
}
function checkInput(words, sort, page, id) {
  if (arguments[0] !== undefined) {
    if (arguments[0].length === 0) {
      throw new KongouClientError("Input Error", "No keywords provided");
    }
    if (typeof arguments[0] !== "string") {
      throw new KongouClientError("Input Error", "Words should be a string");
    }
  }
  if (arguments[1] !== undefined) {
    if (typeof arguments[1] !== "string") {
      throw new KongouClientError("Input Error", "Sort should be a string.");
    }
  }
  if (arguments[2] !== undefined) {
    if (arguments[2].length === 0) {
      throw new KongouClientError(
        "Input Error",
        "Page Number is not provided."
      );
    }
    if (typeof arguments[2] !== "number") {
      throw new KongouClientError("Input Error", "Page should be a number.");
    }
  }
  if (arguments[3] !== undefined) {
    if (arguments[3].length === 0) {
      throw new KongouClientError("Input Error", "No ID is provided");
    }
    if (typeof arguments[3] !== "number") {
      throw new KongouClientError("Input Error", "ID should be a number.");
    }
  }
}
function checkOutput(rest) {
  if (rest.status !== undefined) {
    if (rest.status === 404) {
      throw new KongouServerError(rest.status, rest.statusText);
    }
  }
  if (rest.result !== undefined) {
    if (rest.result.length === 0) {
      throw new KongouServerError(
        "Output Error",
        "No results for the given keywords"
      );
    }
  }
}
module.exports = { linkify, tagify, capitalize, checkInput, checkOutput };
