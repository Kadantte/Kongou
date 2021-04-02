const moment = require("moment");
const baselink = "https://i.nhentai.net/galleries/";
const { linkify, tagify, capitalize } = require("../Options/filters");
const TYPE = {
  j: "jpg",
  p: "png",
  g: "gif",
};
function detailify(response) {
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
module.exports = { detailify };
