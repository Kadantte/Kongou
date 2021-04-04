const usrlink = "https://nhentai.net";
const {
  idCheck,
  keyCheck,
  pageCheck,
  sortCheck,
} = require("./Error-handling/Input/input.js");
const {
  resultsCheck,
  serverCheck,
} = require("./Error-handling/Output/output.js");
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
  keyCheck(words);
  sortCheck(sort);
  pageCheck(page);
  idCheck(id);
}
function checkOutput(rest) {
  resultsCheck(rest);
  serverCheck(rest);
}
module.exports = { linkify, tagify, capitalize, checkInput, checkOutput };
