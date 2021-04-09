const fetch = require("node-fetch");
const { details, querydata } = require("./parse.js");
const { qlink } = require("./Options/links");
const { checkInput, checkOutput } = require("./Options/filters");
const baseurl = "https://nhentai.net/api/";

class kongou {
  /**
   * Get doujin details
   * @param {string|number} id Gallery ID
   * @returns Response.json
   * @memberof kongou
   */
  async get(i) {
    const id = parseInt(i);
    return new Promise(async (resolve, reject) => {
      checkInput(undefined, undefined, undefined, id);
      const response = await fetch(baseurl + "gallery/" + id);
      const data = await response.json();
      checkOutput(data);
      resolve(details(data));
    });
  }

  /**
   * Search from a certain keyword.
   * **These parameters should be in the order specified else they won't work**
   * @returns response data in an array
   * @memberof kongou
   */

  async query(words, sort, page) {
    return new Promise(async (resolve, reject) => {
      checkInput(words, parseInt(sort), parseInt(page), undefined);
      const response = await fetch(
        encodeURI(qlink(words, parseInt(sort), parseInt(page)))
      );
      const data = await response.json();
      checkOutput(data);
      resolve(querydata(data));
    });
  }

  /**
   * Search from a certain keyword and returns the first most result.
   * @param {string} keyword
   * @returns response data in an array
   * @memberof kongou
   */
  async search(words, sort = 3, page = 1) {
    return new Promise(async (resolve, reject) => {
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
