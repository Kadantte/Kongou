const querypath = "https://nhentai.net/api/galleries/search?query=";
function qlink(words, sort, page) {
  if (!sort && !page) {
    return querypath + words + "&sort=popular" + "&page=1";
  }
  if (!page) {
    return querypath + words + "&sort=" + sort;
  } else {
    return querypath + words + "&sort=" + sort + "&page=" + page;
  }
}
module.exports = { qlink };
