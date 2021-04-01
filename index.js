const fetch = require("node-fetch");
const { details, querydata, searchdata } = require("./src/parse.js");
const baseurl = "https://nhentai.net/api/";
const querypath = "https://nhentai.net/api/galleries/search?query=";

class hentaijs {
  /**
   * Get doujin details
   * @param {string|number} id Gallery ID
   * @returns Response.json
   * @memberof hentaijs
   */
  async get(id) {
    let funcurl = baseurl + "gallery/" + id;
    console.log(funcurl);
    const response = await fetch(funcurl);
    const datarized = details(await response.json());
    return datarized;
  }
  /**
   * Search from a certain keyword.
   *
   * **These parameters should be in the order specified else they won't work**
   * @param {string} keyword
   * @param {string} sort
   * @param {number} page
   * @returns response data in an array
   * @memberof hentaiJS
   */

  async query(words, sort, page) {
    let funcurl;

    if (arguments.length === 0) {
      console.log("Failed to execute: No keywords provided");
      new Error("Failed to execute: No keywords provided");
      return;
    } else {
      if (!sort && !page) {
        funcurl = querypath + words;
      }
      if (!page) {
        funcurl = querypath + words + "&sort=" + sort;
      } else funcurl = querypath + words + "&sort=" + sort + "&page=" + page;

      const response = await fetch(funcurl);
      const rest = await response.json();
      if (rest.result.length === 0) {
        console.log("No results were found.");
        new Error("Failed to execute: No results for the given keywords.");
        return;
      } else {
        const datarized = querydata(rest);
        return datarized;
      }
    }
  }
  /**
   * Search from a certain keyword and returns the first most result.
   * @param {string} keyword
   * @returns response data in an array
   * @memberof hentaiJS
   */
  async search(words) {
    let funcurl;
    if (arguments.length === 0) {
      console.log("Failed to execute: No keywords provided");
      new Error("Failed to execute: No keywords provided");
      return;
    } else {
      funcurl = querypath + words + "&sort=popular" + "&page=1";

      const response = await fetch(funcurl);
      const data = await response.json();
      const datarized = details(data.result[0]);
      return datarized;
    }
  }
}

module.exports = hentaijs;
