import { KongouClientError } from "../errors.js";
export default function sortCheck(sort) {
  if (sort !== undefined) {
    if (sort.length === 0) {
      throw new KongouClientError("Input Error", "No sort option provided.");
    }
    if (typeof sort !== "number") {
      throw new KongouClientError("Input Error", "Sort should be a number");
    }
    if (isNaN(sort)) {
      throw new KongouClientError("Input Error", "Sort should be a number");
    }
    if (sort > 3) {
      throw new KongouClientError("Option Error", "Sort options are from 1-3");
    }
  }
}
