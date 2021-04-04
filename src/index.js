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
  async get(id) {
    return new Promise(async (resolve, reject) => {
      checkInput(undefined, undefined, undefined, id);
      const rest = await fetch(baseurl + "gallery/" + id);
      checkOutput(rest);
      const datarized = await details(await rest.json());
      console.log(datarized);
      resolve(datarized);
    });
  }

  /**
   * Search from a certain keyword.
   *
   * **These parameters should be in the order specified else they won't work**
   * @returns response data in an array
   * @memberof kongou
   */

  async query(words, sort, page) {
    return new Promise(async (resolve, reject) => {
      checkInput(words, sort, page, undefined);
      let funurl = qlink(words, sort, page);
      const response = await fetch(funurl);
      const rest = await response.json();
      checkOutput(rest);
      const datarized = await querydata(rest);
      resolve(datarized);
    });
  }

  /**
   * Search from a certain keyword and returns the first most result.
   * @param {string} keyword
   * @returns response data in an array
   * @memberof kongou
   */
  async search(words, sort = "popular", page = 1) {
    return new Promise(async (resolve, reject) => {
      checkInput(words, sort, page, undefined);
      const funurl = qlink(words, sort, page);
      const response = await fetch(funurl);
      const rest = await response.json();
      checkOutput(rest);
      const datarized = await details(rest.result[0]);
      resolve(datarized);
    });
  }
}

module.exports = kongou;
