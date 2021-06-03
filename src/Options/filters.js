const usrlink = "https://nhentai.net";
const {
  keyCheck,
  pageCheck,
  sortCheck,
} = require("./Error-handling/Input/input.js");

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
function checkInput(words, sort, page) {
  keyCheck(words);
  sortCheck(sort);
  pageCheck(page);
}
module.exports = { linkify, tagify, capitalize, checkInput };
