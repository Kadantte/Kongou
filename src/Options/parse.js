const moment = require("moment");
const baselink = "https://i.nhentai.net/galleries/";
const { linkify, tagify, capitalize } = require("./filters");
const TYPE = {
  j: "jpg",
  p: "png",
  g: "gif",
};
function details(response) {
  let details = [];
  let language = [];
  let category = [];
  let tags = [];
  let images = [];
  let result = [];
  response.tags.forEach((tag) => {
    if (tag.type === "language") {
      language.push({
        id: tag.id,
        name: capitalize(tag.name),
        url: tagify(tag.url),
        hyptxt: `[${capitalize(tag.name)}](${tagify(tag.url)})`,
        count: tag.count,
      });
    }
    if (tag.type === "category")
      category.push({
        id: tag.id,
        name: capitalize(tag.name),
        url: tagify(tag.url),
        hyptxt: `[${capitalize(tag.name)}](${tagify(tag.url)})`,
        count: tag.count,
      });
    if (tag.type === "tag")
      tags.push({
        id: tag.id,
        name: capitalize(tag.name),
        url: tagify(tag.url),
        hyptxt: `[${capitalize(tag.name)}](${tagify(tag.url)})`,
        count: tag.count,
      });
  });
  response.images.pages.forEach((page, i) => {
    images.push(`${baselink}${response.media_id}/${[i + 1]}.${TYPE[page.t]}`);
  });
  details.push({
    id: response.id,
    title: response.title,
    link: linkify(response.id),
    upload_date: {
      upload_date: new Date(response.upload_date * 1000),
      pretty: moment(new Date(response.upload_date * 1000)).format(
        "MMMM Do YYYY, h:mm:ss a"
      ),
    },
    scanlator: response.scanlator,
    num_pages: response.num_pages,
    num_favorites: response.num_favorites,
  });
  result.push({
    details: details[0],
    language: language,
    category: category,
    tags: tags,
    images: images,
  });
  return result[0];
}
function queryData(response) {
  let query = [];
  response.result.forEach((resu) => {
    let details = [];
    let language = [];
    let category = [];
    let tags = [];
    let images = [];

    resu.tags.forEach((tag) => {
      if (tag.type === "language") {
        language.push({
          id: tag.id,
          name: capitalize(tag.name),
          url: tagify(tag.url),
          hyptxt: `[${capitalize(tag.name)}](${tagify(tag.url)})`,
          count: tag.count,
        });
      }
      if (tag.type === "category")
        category.push({
          id: tag.id,
          name: capitalize(tag.name),
          url: tagify(tag.url),
          hyptxt: `[${capitalize(tag.name)}](${tagify(tag.url)})`,
          count: tag.count,
        });
      if (tag.type === "tag")
        tags.push({
          id: tag.id,
          name: capitalize(tag.name),
          url: tagify(tag.url),
          hyptxt: `[${capitalize(tag.name)}](${tagify(tag.url)})`,
          count: tag.count,
        });
    });
    resu.images.pages.forEach((page, i) => {
      images.push(`${baselink}${resu.media_id}/${[i + 1]}.${TYPE[page.t]}`);
    });
    details.push({
      id: resu.id,
      title: resu.title,
      link: linkify(resu.id),
      upload_date: {
        upload_date: new Date(resu.upload_date * 1000),
        pretty: moment(new Date(resu.upload_date * 1000)).format(
          "MMMM Do YYYY, h:mm:ss a"
        ),
      },
      scanlator: resu.scanlator,
      num_pages: resu.num_pages,
      num_favorites: resu.num_favorites,
    });
    query.push({
      details: details[0],
      language: language,
      category: category,
      tags: tags,
      images: images,
    });
  });

  return query;
}
module.exports = { details, queryData };
