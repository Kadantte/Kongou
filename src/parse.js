const { detailify } = require("./Parse/detailify");
const { queryfy } = require("./Parse/queryfy");
/**
 * Filters the info of a single doujin
 * @param {string} response
 * @returns Object
 * @memberof Parse
 * Parse
 */
function details(response) {
  return detailify(response);
}
/**
 * Filter, sort response data to more readerable arrays.
 *
 * @param {string} Response.json
 * @returns response data in an array
 * @memberof Parse
 */

function querydata(response) {
  return queryfy(response);
}

module.exports = {
  details,
  querydata,
};
