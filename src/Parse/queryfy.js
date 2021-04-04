const moment = require("moment");
const baselink = "https://i.nhentai.net/galleries/";
const { linkify, tagify, capitalize } = require("../Options/filters");
const TYPE = {
  j: "jpg",
  p: "png",
  g: "gif",
};
function queryfy(response) {
  let query = [];
  response.result.forEach((resu) => {
    let details = [];
    let info = [];
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
      language: language[0],
      category: category[0],
      tags: tags,
      images: images,
    });
  });

  return query;
}
module.exports = { queryfy };
