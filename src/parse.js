const moment = require("moment");
const baselink = "https://i.nhentai.net/galleries/";
const TYPE = {
  j: "jpg",
  p: "png",
  g: "gif",
};
/**
 * Filters the info of a single doujin
 * @param {string} response
 * @returns Object
 * @memberof Parse
 */

function details(response) {
  let details = [];
  let info = [];
  let langauge = [];
  let category = [];
  let tags = [];
  let images = [];
  let result = [];
  response.tags.forEach((tag) => {
    if (tag.type === "language") {
      langauge.push({
        id: tag.id,
        name: tag.name,
        url: tag.url,
        count: tag.count,
      });
    }
    if (tag.type === "category")
      category.push({
        id: tag.id,
        name: tag.name,
        url: tag.url,
        count: tag.count,
      });
    if (tag.type === "tag")
      tags.push({ id: tag.id, name: tag.name, url: tag.url, count: tag.count });
  });
  response.images.pages.forEach((page, i) => {
    images.push(`${baselink}${response.media_id}/${[i + 1]}.${TYPE[page.t]}`);
  });
  details.push({
    id: response.id,
    title: response.title,
    upload_date_pretty: moment(new Date(response.upload_date * 1000)).format(
      "MMMM Do YYYY, h:mm:ss a"
    ),
  });
  info.push({
    scanlator: response.scanlantor
      ? response.scanlator
      : "No scanlator specified.",
    upload_date: new Date(response.upload_date * 1000),
    num_pages: response.num_pages,
    num_favorites: response.num_favorites,
  });
  result.push({
    details: details[0],
    info: info[0],
    langauge: langauge,
    category: category,
    tags: tags,
    images: images,
  });
  return result[0];
}

/**
 * Filter, sort response data to more readerable arrays.
 *
 * @param {string} Response.json
 * @returns response data in an array
 * @memberof Parse
 */

function querydata(response) {
  let query = [];
  response.result.forEach((resu) => {
    let details = [];
    let info = [];
    let langauge = [];
    let category = [];
    let tags = [];
    let images = [];

    resu.tags.forEach((tag) => {
      if (tag.type === "language") {
        langauge.push({
          id: tag.id,
          name: tag.name,
          url: tag.url,
          count: tag.count,
        });
      }
      if (tag.type === "category")
        category.push({
          id: tag.id,
          name: tag.name,
          url: tag.url,
          count: tag.count,
        });
      if (tag.type === "tag")
        tags.push({
          id: tag.id,
          name: tag.name,
          url: tag.url,
          count: tag.count,
        });
    });
    resu.images.pages.forEach((page, i) => {
      images.push(`${baselink}${resu.media_id}/${[i + 1]}.${TYPE[page.t]}`);
    });
    details.push({
      id: resu.id,
      name: resu.name,
      upload_date_pretty: moment(new Date(resu.upload_date * 1000)).format(
        "MMMM Do YYYY, h:mm:ss a"
      ),
    });
    info.push({
      scanlator: resu.scanlantor ? resu.scanlator : "No scanlator specified.",
      upload_date: new Date(resu.upload_date * 1000),
      num_pages: resu.num_pages,
      num_favorites: resu.num_favorites,
    });
    query.push({
      details: details[0],
      info: info[0],
      langauge: langauge[0],
      category: category[0],
      tags: tags,
      images: images,
    });
  });

  return query;
}

/**
 * Topmost result
 * @param {response} Response.json
 * @returns returns the first id of a search
 * @memberof Parse
 */
async function searchdata(response) {
  return response.result[0].id;
}

module.exports = {
  details,
  querydata,
  searchdata,
};
