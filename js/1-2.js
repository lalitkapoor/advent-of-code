const fs = require("fs");
const contents = fs.readFileSync("../resources/1.txt", {
  encoding: "utf8",
  flag: "r",
});

let top3 = [0, 0, 0];

for (const lines of contents.split("\n\n")) {
  const calories = lines.split("\n").reduce((acc, line) => {
    return acc + parseInt(line);
  }, 0);

  if (calories >= top3[2]) {
    console.log(calories, top3);
    top3.push(calories);
    top3 = top3.sort((a, b) => b - a).slice(0, 3);
  }
}

console.log(top3);
console.log(
  top3.reduce((acc, current) => {
    return acc + current;
  }, 0)
);
