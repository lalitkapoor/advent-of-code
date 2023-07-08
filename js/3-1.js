const fs = require("fs");

const contents = fs
  .readFileSync("../resources/3.txt", {
    encoding: "utf8",
    flag: "r",
  })
  .trim();

const findCommonLetter = function (str1, str2) {
  const set1 = new Set(str1.split(""));
  const set2 = new Set(str2.split(""));

  for (const letter of set1) {
    if (set2.has(letter)) return letter;
  }

  return null;
};

const scoreLetter = function (letter) {
  const charCode = letter.charCodeAt(0);
  if (charCode > 96) return charCode - 96;
  if (charCode > 64) return charCode - 64 + 26;
};

let total = 0;
for (const rucksack of contents.split("\n")) {
  const [first, second] = [
    rucksack.slice(0, rucksack.length / 2),
    rucksack.slice(rucksack.length / 2),
  ];

  const letter = findCommonLetter(first, second);
  const score = scoreLetter(letter);
  total += score;
}

console.log(total);
