const usrlink = "https://nhentai.net";
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
module.exports = { linkify, tagify, capitalize };
