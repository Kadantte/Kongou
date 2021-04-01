const hentaijs = require("./index");
const nhentai = new hentaijs();

const testType = 1; // 1 for GET, 2 for QUERY, 3 for SEARCH
async function test(Type) {
  async function GET() {
    console.log("Starting GET function...");
    await nhentai.get("353103").then((data) => console.log(data));
  }
  console.log("", "\n", "\n");
  async function QUERY() {
    console.log("Starting QUERY function...");
    await nhentai
      .query("Kantai Collection", "popular", 1)
      .then((data) => console.log(data[0].tags));
  }
  console.log("", "\n", "\n");
  async function SEARCH() {
    console.log("Starting SEARCH function...");
    await nhentai
      .search("Kantai Collection")
      .then((data) => console.log(data.details.id));
  }
  if (Type === 1) GET();
  if (Type === 2) QUERY();
  if (Type === 3) SEARCH();
  else {
    console.log("NO PLS NO");
  } 
}
test(testType);
