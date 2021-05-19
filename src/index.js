const fetch = require("node-fetch");
const { qlink } = require("./Options/links.js");
const { details, queryData } = require("./Options/parse.js");
const { checkInput } = require("./Options/filters.js");
const { KongouServerError } = require("./Options/Error-handling/errors.js");
const baseurl = "https://nhentai.net/api/";

class kongou {
  /**
   * Returns book details from gallery ID.
   * @param {String|Number} id Gallery ID
   * @return {Object} nhentai book object.
   * @async
   */
  async get(id) {
    checkInput(undefined, undefined, undefined, parseInt(id));
    return new Promise(async (resolve, reject) => {
      const response = await fetch(baseurl + "gallery/" + parseInt(id));
      if (response.status !== 200) {
        return reject(
          new KongouServerError(response.status, response.statusText)
        );
      }
      resolve(details(await response.json()));
    });
  }

  /**
   * Returns list of books with provided keywords
   * @param {string} words
   * @param {string|number} sort
   * @param {string|number} page
   * @return {object} 25 nhentai book objects.
   * @async
   */

  async query(words, sort, page) {
    checkInput(words, parseInt(sort), parseInt(page), undefined);
    return new Promise(async (resolve, reject) => {
      const response = await fetch(
        encodeURI(qlink(words, parseInt(sort), parseInt(page)))
      ).catch((error) => {
        console.log(error.message);
      });
      const data = await response.json();

      if (response.status !== 200) {
        return reject(
          new KongouServerError(response.status, response.statusText)
        );
      }
      if (data.num_pages === 0) {
        return reject(new KongouServerError("404", "No results found!"));
      }

      resolve(queryData(data));
    });
  }

  /**
   * Returns a random book using random endpoint.
   * @return {Object} nHentai book object
   * @author
   * @async
   */

  async random() {
    return new Promise(async (resolve, reject) => {
      const response = await fetch("https://nhentai.net/random/");
      if (response.status !== 200) {
        return reject(
          new KongouServerError(response.status, response.statusText)
        );
      }
      let id = response.url.replace(/[^0-9]/g, "");
      resolve(this.get(id));
    });
  }
}
module.exports = new kongou();
