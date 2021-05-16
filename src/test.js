//Run npm run test
const kongou = require("./index");
const testType = 1; // 1 for GET, 2 for QUERY
function test(Type) {
  async function GET() {
    await kongou
      .get(231193)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
  async function QUERY() {
    await kongou
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
