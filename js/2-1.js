const fs = require("fs");
const contents = fs.readFileSync("../resources/2.txt", {
  encoding: "utf8",
  flag: "r",
});

const shape = { X: 1, Y: 2, Z: 3 };
const rules = {
  A: { X: 3, Y: 6, Z: 0 }, // rocks
  B: { X: 0, Y: 3, Z: 6 }, // paper
  C: { X: 6, Y: 0, Z: 3 }, // scissor
};

let total = 0;
for (const game of contents.split("\n")) {
  const [computer, me] = game.split(" ");
  const score = shape[me] + rules[computer][me];
  total += score;
}

console.log(total);
