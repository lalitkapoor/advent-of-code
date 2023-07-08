const fs = require("fs");
const contents = fs.readFileSync("../resources/2.txt", {
  encoding: "utf8",
  flag: "r",
});

const shapes = { A: 1, B: 2, C: 3 };
const outcomes = { X: 0, Y: 3, Z: 6 };
const rules = {
  A: { X: "C", Y: "A", Z: "B" }, // rocks
  B: { X: "A", Y: "B", Z: "C" }, // paper
  C: { X: "B", Y: "C", Z: "A" }, // scissor
};

let total = 0;
for (const game of contents.split("\n")) {
  const [computer, outcome] = game.split(" ");
  const me = rules[computer][outcome];
  const score = shapes[me] + outcomes[outcome];
  total += score;
}

console.log(total);
