import { KongouClientError } from "../errors.js";
export default function pageCheck(page) {
  if (page !== undefined) {
    if (page.length === 0) {
      throw new KongouClientError(
        "Input Error",
        "Page number is not provided."
      );
    }
    if (isNaN(page)) {
      throw new KongouClientError("Input Error", "Page should be a number.");
    }
    if (typeof page !== "number") {
      throw new KongouClientError("Input Error", "Page should be a number.");
    }
  }
}
