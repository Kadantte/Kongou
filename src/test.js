//Run npm run test
const kongou = require("./index");
const nhentai = new kongou();
const testType = 3; // 1 for GET, 2 for QUERY, 3 for SEARCH
async function test(Type) {
  async function GET() {
    console.log("Starting GET function...");
    const data = await nhentai.get(101);
    console.log(data); //.catch((error) => console.log(error));
  }

  async function QUERY() {
    console.log("Starting QUERY function...");
    const data = await nhentai
      .query("kongou", "3", "1");
    console.log(data);
  }

  async function SEARCH() {
    console.log("Starting SEARCH function...");
    const data = await nhentai.search("Kantai Collection");
    console.log(data);
  }
  if (Type === 1) GET();
  else if (Type === 2) QUERY();
  else if (Type === 3) SEARCH();
  else {
    GET();
    QUERY();
    SEARCH();

  }
}
test(testType);
