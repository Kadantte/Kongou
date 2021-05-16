const usrlink = "https://nhentai.net";
import {
  idCheck,
  keyCheck,
  pageCheck,
  sortCheck,
} from "./Error-handling/Input/input.js";
export function linkify(id) {
  return usrlink + "/g/" + id;
}
export function tagify(link) {
  return usrlink + link;
}
export function capitalize(str) {
  const string = str
    .toString()
    .split("_")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    );
  return string[0];
}
export function checkInput(words, sort, page, id) {
  keyCheck(words);
  sortCheck(sort);
  pageCheck(page);
  idCheck(id);
}
