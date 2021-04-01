const moment = require("moment");
const baselink = "https://i.nhentai.net/galleries/";
const TYPE = {
  j: "jpg",
  p: "png",
  g: "gif",
};
/**
 * Parse list page
 *
 * @param {string} html
 * @returns Object
 */
function details(response) {
  let langauge = [];
  let category = [];
  let tags = [];
  let images = [];
  let details = [];
  let result = [];
  response.tags.forEach((tag) => {
    if (tag.type === "language") {
      langauge.push(tag.name);
    }
    if (tag.type === "category") category.push(tag.name);
    if (tag.type === "tag") tags.push(tag.name);
  });
  response.images.pages.forEach((page, i) => {
    images.push(`${baselink}${response.media_id}/${[i + 1]}.${TYPE[page.t]}`);
  });
  details.push({
    id: response.id,
    name: response.name,
    scanlator: response.scanlantor
      ? response.scanlator
      : "No scanlator specified.",
    upload_date_pretty: moment(new Date(response.upload_date * 1000)).format(
      "MMMM Do YYYY, h:mm:ss a"
    ),
    upload_date: new Date(response.upload_date * 1000),
    num_pages: response.num_pages,
    num_favorites: response.num_favorites,
  });
  result.push({
    details: details,
    langauge: langauge,
    category: category,
    tags: tags,
    images: images,
  });
  return result;
}

/**
 * Filter, sort response data to more readerable arrays.
 *
 * @param {response} Response.json
 * @returns response data in an array
 * @memberof Parse
 */

function querydata(response) {
  res = response.result;
  let query = [];
  res.forEach((resu) => {
    let langauge = [];
    let category = [];
    let tags = [];
    let images = [];
    let details = [];

    resu.tags.forEach((tag) => {
      if (tag.type === "language") {
        langauge.push(tag.name);
      }
      if (tag.type === "category") category.push(tag.name);
      if (tag.type === "tag") tags.push(tag.name);
    });
    resu.images.pages.forEach((page, i) => {
      images.push(`${baselink}${resu.media_id}/${[i + 1]}.${TYPE[page.t]}`);
    });
    details.push({
      id: resu.id,
      name: resu.name,
      scanlator: resu.scanlantor ? resu.scanlator : "No scanlator specified.",
      upload_date_pretty: moment(new Date(resu.upload_date * 1000)).format(
        "MMMM Do YYYY, h:mm:ss a"
      ),
      upload_date: new Date(resu.upload_date * 1000),
      num_pages: resu.num_pages,
      num_favorites: resu.num_favorites,
    });
    query.push({
      details: details,
      langauge: langauge,
      category: category,
      tags: tags,
      images: images,
    });
  });

  return query;
}

/**
 * Topmost result
 * @param {response} Response.json
 * @returns response data in an array
 * @memberof Parse
 */
async function searchdata(response){
    return response.result[0].id;
}

module.exports = {
  details,
  querydata,
  searchdata,
};
