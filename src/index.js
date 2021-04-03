const fetch = require("node-fetch");
const { details, querydata, searchdata } = require("./parse.js");
const { qlink } = require("./Options/links");
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
      if (typeof id !== "number") {
        reject(new Error("Failed to execute: ID is not a number"));
      }
      const response = await fetch(baseurl + "gallery/" + id);
      const datarized = await details(await response.json());
      console.log(datarized);
      resolve(datarized);
    });
  }

  /**
   * Search from a certain keyword.
   *
   * **These parameters should be in the order specified else they won't work**
   * @param {string} keyword
   * @param {string} sort
   * @param {number} page
   * @returns response data in an array
   * @memberof kongou
   */

  async query(words, sort, page) {
    return new Promise(async (resolve, reject) => {
      if (typeof words !== "string") {
        reject(new Error("Failed to execute: Words tag should be a string"));
      }
      if (sort === true) {
        if (typeof sort !== "string") {
          reject(new Error("Failed to execute: Sort tag should be a string."));
        }
      }
      if (page === true) {
        if (typeof page !== "number") {
          reject(new Error("Failed to execute: Page tag should be a number."));
        }
      }
      let funurl = qlink(words, sort, page);
      const response = await fetch(funurl);
      const rest = await response.json();
      if (rest.result.length === 0) {
        reject(new Error("Query Error: No results for the given keywords"));
      } else {
        const datarized = await querydata(rest);
        resolve(datarized);
      }
    });
  }
  /**
   * Search from a certain keyword and returns the first most result.
   * @param {string} keyword
   * @returns response data in an array
   * @memberof kongou
   */
  async search(words, sort = 'popular', page = 1) {
    return new Promise(async (resolve, reject) => {
      if (words.length === 0) {
        reject(new Error("Failed to execute: No keywords provided"));
      }
      const funurl = qlink(words, sort, page);
      const response = await fetch(funurl);
      const data = await response.json();
      const datarized = details(data.result[0]);
      resolve(datarized);
    });
  }
}

module.exports = kongou;
