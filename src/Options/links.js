const querypath = "https://nhentai.net/api/galleries/search?query=";
const SORT = {
  1: "popular-today",
  2: "popular-week",
  3: "popular",
};
function qlink(words, sort, page) {
  if (!sort && !page) {
    return querypath + words + "&sort=popular" + "&page=1";
  }
  if (!page) {
    return querypath + words + "&sort=" + SORT[sort];
  } else {
    return querypath + words + "&sort=" + SORT[sort] + "&page=" + page;
  }
}
module.exports = { qlink };
