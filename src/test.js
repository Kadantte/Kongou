//Run npm run test
const kongou = require("./index");
const nhentai = new kongou();
const testType = 1; // 1 for GET, 2 for QUERY, 3 for SEARCH
async function test(Type) {
  async function GET() {
    await nhentai
      .get(223435)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
  async function QUERY() {
    await nhentai
      .query("animated", "3", 1)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
  if (Type === 1) GET();
  else if (Type === 2) QUERY();
  else {
    GET();
    QUERY();
  }
}
test(testType);
