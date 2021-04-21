const fetch = require("node-fetch");
const { details, queryData } = require("./Options/parse");
const { qlink } = require("./Options/links");
const { checkInput, checkOutput } = require("./Options/filters");
const baseurl = "https://nhentai.net/api/";

class kongou {
  /**
   * Get doujin details
   * @param {string|number} id Gallery ID
   * @returns response.json
   * @memberof kongou
   */
  async get(id) {
    return new Promise(async (resolve) => {
      checkInput(undefined, undefined, undefined, parseInt(id));
      const response = await fetch(baseurl + "gallery/" + parseInt(id));
      const data = await response.json();
      checkOutput(data);
      resolve(details(data));
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
    return new Promise(async (resolve) => {
      checkInput(words, parseInt(sort), parseInt(page), undefined);
      const response = await fetch(
        encodeURI(qlink(words, parseInt(sort), parseInt(page)))
      );
      const data = await response.json();
      checkOutput(data);
      resolve(queryData(data));
    });
  }

  /**
   * Search from a certain keyword and returns the first most result.
   * @param {string} words
   * @returns response.json
   * @memberof kongou
   */
  async search(words, sort = 3, page = 1) {
    return new Promise(async (resolve) => {
      checkInput(words, parseInt(sort), parseInt(page), undefined);
      const response = await fetch(
        encodeURI(qlink(words, parseInt(sort), parseInt(page)))
      );
      const data = await response.json();
      checkOutput(data);
      resolve(details(data.result[0]));
    });
  }
}

module.exports = kongou;
