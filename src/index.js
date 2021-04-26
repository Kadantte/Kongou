const fetch = require("node-fetch");
const { details, queryData } = require("./Options/parse");
const { qlink } = require("./Options/links");
const { checkInput } = require("./Options/filters");
const { KongouServerError } = require("./Options/Error-handling/errors");
const baseurl = "https://nhentai.net/api/";

class kongou {
  /**
   * Get doujin details
   * @param {string|number} id Gallery ID
   * @returns response.json
   * @memberof kongou
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
      resolve(details(response.json()));
    });
  }

  /**
   * Search from a certain keyword.
   * @param {string} words
   * @param {string|number} sort
   * @param {string|number} page
   * **These parameters should be in the order specified else they won't work**
   * @returns response.json
   * @memberof kongou
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
}

module.exports = kongou;
