const kongou = require("./index");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("get[1], query[2], random[3] \n");

readline.question(`What function do you need to test? `, async (fn) => {
  if (parseInt(fn) === 1) {
    readline.question("ID Number: ", async (fn) => {
      await kongou
        .get(fn)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          return console.log(error.message);
        });
      readline.close();
    });
  } else if (parseInt(fn) === 2) {
    let answer = {};
    readline.question("Keyword: ", (fn) => {
      answer.keyword = fn;
      readline.question("Sorting Option: ", (fn) => {
        answer.sort = fn;
        readline.question("Page Number: ", async (fn) => {
          answer.page = fn;
          console.log(answer);
          await kongou
            .query(answer.keyword, answer.sort, answer.page)
            .then((data) => console.log(data))
            .catch((error) => console.log(error.message));
          readline.close();
        });
      });
    });
  } else if (parseInt(fn) === 3) {
    await kongou.random().then((data) => {
      console.log(data);
    });
  } else {
    console.error("No input was provided!");
    readline.close();
  }
});
