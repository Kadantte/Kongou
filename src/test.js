//Run npm run test
const kongou = require("./index");
const testType = 3; // 1 for GET, 2 for QUERY
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
  async function RANDOM() {
    await kongou.random().then((data) => {
      console.log(data);
    });
  }

  if (Type === 1) GET();
  else if (Type === 2) QUERY();
  else if (Type === 3) RANDOM();
  else {
    GET();
    QUERY();
    RANDOM();
  }
}
test(testType);
