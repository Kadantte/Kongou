//Run npm run test
const hentaijs = require("./index");
const nhentai = new hentaijs();
const testType = 2; // 1 for GET, 2 for QUERY, 3 for SEARCH
async function test(Type) {
  async function GET() {
    console.log("Starting GET function...");
    await nhentai.get("353103").then((data) => console.log(data));
  }

  async function QUERY() {
    console.log("", "\n", "\n");
    console.log("Starting QUERY function...");
    await nhentai
      .query("Kantai Collection", "popular", 1)
      .then((data) => console.log(data[0].tags));
  }

  async function SEARCH() {
    console.log("", "\n", "\n");
    console.log("Starting SEARCH function...");
    await nhentai
      .search("Kantai Collection")
      .then((data) => console.log(data.details.id));
  }
  if (Type === 1) GET();
  else if (Type === 2) QUERY();
  else if (Type === 3) SEARCH();
  else {
    console.log("NO PLS NO");
  }
}
test(testType);
