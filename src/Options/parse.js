const { linkify, tagify, capitalize } = require("./filters.js");
const TYPE = {
  j: "jpg",
  p: "png",
  g: "gif",
};
function details(response) {
  let details = [],
    language = [],
    category = [],
    tags = [],
    images = [],
    thumbnails = [],
    result = [];
  response.tags.forEach((tag) => {
    if (tag.type === "language") {
      language.push({
        id: parseInt(tag.id),
        name: capitalize(tag.name),
        url: tagify(tag.url),
        hyptxt: `[${capitalize(tag.name)}](${tagify(tag.url)})`,
        count: parseInt(tag.count),
      });
    }
    if (tag.type === "category")
      category.push({
        id: parseInt(tag.id),
        name: capitalize(tag.name),
        url: tagify(tag.url),
        hyptxt: `[${capitalize(tag.name)}](${tagify(tag.url)})`,
        count: parseInt(tag.count),
      });
    if (tag.type === "tag")
      tags.push({
        id: parseInt(tag.id),
        name: capitalize(tag.name),
        url: tagify(tag.url),
        hyptxt: `[${capitalize(tag.name)}](${tagify(tag.url)})`,
        count: parseInt(tag.count),
      });
  });
  response.images.pages.forEach((page, i) => {
    images.push(
      `https://i.nhentai.net/galleries/${response.media_id}/${[i + 1]}.${
        TYPE[page.t]
      }`
    );
    thumbnails.push(
      `https://t.nhentai.net/galleries/${response.media_id}/${[i + 1]}t.${
        TYPE[page.t]
      }`
    );
  });
  details.push({
    id: parseInt(response.id),
    title: response.title,
    link: linkify(response.id),
    upload_date: new Date(response.upload_date * 1000),
    scanlator: response.scanlator,
    num_pages: parseInt(response.num_pages),
    num_favorites: parseInt(response.num_favorites),
  });
  result.push({
    details: details[0],
    language: language,
    category: category,
    tags: tags,
    images: {
      full: images,
      thumb: thumbnails,
    },
  });
  return result[0];
}
function queryData(response) {
  let query = [];
  response.result.forEach((resu) => {
    let details = [],
      language = [],
      category = [],
      tags = [],
      images = [],
      thumbnails = [];

    resu.tags.forEach((tag) => {
      if (tag.type === "language") {
        language.push({
          id: parseInt(tag.id),
          name: capitalize(tag.name),
          url: tagify(tag.url),
          hyptxt: `[${capitalize(tag.name)}](${tagify(tag.url)})`,
          count: parseInt(tag.count),
        });
      }
      if (tag.type === "category")
        category.push({
          id: parseInt(tag.id),
          name: capitalize(tag.name),
          url: tagify(tag.url),
          hyptxt: `[${capitalize(tag.name)}](${tagify(tag.url)})`,
          count: parseInt(tag.count),
        });
      if (tag.type === "tag")
        tags.push({
          id: parseInt(tag.id),
          name: capitalize(tag.name),
          url: tagify(tag.url),
          hyptxt: `[${capitalize(tag.name)}](${tagify(tag.url)})`,
          count: parseInt(tag.count),
        });
    });
    resu.images.pages.forEach((page, i) => {
      images.push(
        `https://i.nhentai.net/galleries/${resu.media_id}/${[i + 1]}.${
          TYPE[page.t]
        }`
      );
    });
    resu.images.pages.forEach((page, i) => {
      thumbnails.push(
        `https://t.nhentai.net/galleries/${resu.media_id}/${[i + 1]}t.${
          TYPE[page.t]
        }`
      );
    });
    details.push({
      id: parseInt(resu.id),
      title: resu.title,
      link: linkify(resu.id),
      upload_date: new Date(resu.upload_date * 1000),
      scanlator: resu.scanlator,
      num_pages: parseInt(resu.num_pages),
      num_favorites: parseInt(resu.num_favorites),
    });
    query.push({
      details: details[0],
      language: language,
      category: category,
      tags: tags,
      images: {
        full: images,
        thumb: thumbnails,
      },
    });
  });

  return query;
}
module.exports = { details, queryData };
