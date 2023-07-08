const fs = require("fs");
const contents = fs.readFileSync("../resources/1.txt", {
  encoding: "utf8",
  flag: "r",
});

let max = -1;

for (const [index, lines] of contents.split("\n\n").entries()) {
  const calories = lines.split("\n").reduce((acc, line) => {
    return acc + parseInt(line);
  }, 0);

  if (calories > max) max = calories;
}
console.log(max);
