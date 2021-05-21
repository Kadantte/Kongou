const fetch = require("node-fetch");
const { qlink } = require("./Options/links.js");
const { details, queryData } = require("./Options/parse.js");
const { checkInput } = require("./Options/filters.js");
const { idCheck } = require("./Options/Error-handling/Input/input.js");
const { KongouServerError } = require("./Options/Error-handling/errors.js");
const baseurl = "https://nhentai.net/api/";

class kongou {
  /**
   * Returns book details from gallery ID.
   * Function accepts both strings and number for the id.
   *
   * eg:
   * ```js
   * "186780" && 186780
   * ```
   *
   * ---
   * ---
   *
   * ## Example
   * ```js
   * await kongou
   * .get(186780)
   * .then((response) => {
   *    console.log(response)
   * })
   * ```
   * ```js
   * await kongou
   * .get("186780")
   * .then((response) => {
   *    console.log(response)
   * })
   * ```
   *
   * ---
   * ---
   *
   * For more information check:
   * https://github.com/Curstantine/Kongou/wiki/Functions#get
   * @param {String|Number} id Gallery ID
   */
  async get(id) {
    idCheck(id);
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
   * Returns a list of books with provided keywords.
   * Function accepts both strings and numbers.
   * eg:
   * ```js
   * "186780" && 186780
   * ```
   *
   * ---
   * ---
   *
   * ## [Sort Types](https://github.com/Curstantine/Kongou/wiki/Options#sort)
   * If no types are given ``popular`` will be used
   * ```js
   * 1: "popular-today"
   * 2: "popular-week"
   * 3: "popular"
   * ```
   *
   * ---
   * ---
   *
   * ## Example
   * ```js
   * await kongou
   * .query("Tentacle Romance", sortType, 1)
   * .then((response) => {
   *    console.log(response[0]);
   * });
   * ```
   *```js
   * await kongou
   * .query("Tentacle Romance", "2" , "1")
   * .then((response) => {
   *    console.log(response[0]);
   * });
   * ```
   *
   * ---
   * ---
   *
   * For more information check:
   * https://github.com/Curstantine/Kongou/wiki/Functions#query
   * @param {string} words @param {string|number} sort @param {string|number} page
   */

  async query(words, sort, page) {
    checkInput(words, parseInt(sort), parseInt(page));
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
   *
   * ---
   * ---
   *
   * ## Example
   * ```js
   * await kongou.random().then((response) => {
   * console.log(response);
   * });
   * ```
   *
   * ---
   * ---
   *
   * Author: Sinkaroid
   * For more information check:
   * https://github.com/Curstantine/Kongou/wiki/Functions#random
   */

  async random() {
    return new Promise(async (resolve, reject) => {
      const response = await fetch("https://nhentai.net/random/");
      if (response.status !== 200) {
        return reject(
          new KongouServerError(response.status, response.statusText)
        );
      }
      resolve(this.get(response.url.replace(/[^0-9]/g, "")));
    });
  }
}
/**
 * A wrapper around nHentai's infamous json API instead of scapring the site.
 * [GitHub](https://github.com/Curstantine/Kongou) |
 * [Fuyu](https://git.fuyu.moe/Curstantine/Kongou) |
 * [npm](https://www.npmjs.com/package/kongou)
 *
 * ---
 * ---
 *
 * **Contributors:**
 * [Tracreed](https://github.com/tracreed),
 * [sinkaroid](https://github.com/sinkaroid),
 * [Curstantine](https://github.com/Curstantine)
 *
 * ---
 * ---
 *
 * Need more information? Check out the wiki:
 * https://github.com/Curstantine/Kongou/wiki#kongou
 */
module.exports = new kongou();
