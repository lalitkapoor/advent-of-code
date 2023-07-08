const fs = require("fs");

const contents = fs
  .readFileSync("../resources/3.txt", {
    encoding: "utf8",
    flag: "r",
  })
  .trim();

const findCommonLetter = function (str1, str2, str3) {
  const set1 = new Set(str1.split(""));
  const set2 = new Set(str2.split(""));
  const set3 = new Set(str3.split(""));

  const intersection = [...set1]
    .filter((element) => set2.has(element))
    .filter((element) => set3.has(element));
  return intersection[0];
};

const scoreLetter = function (letter) {
  const charCode = letter.charCodeAt(0);
  if (charCode > 96) return charCode - 96;
  if (charCode > 64) return charCode - 64 + 26;
};

let total = 0;
const rucksacks = contents.split("\n");
while (rucksacks.length > 0) {
  const letter = findCommonLetter(
    rucksacks.pop(),
    rucksacks.pop(),
    rucksacks.pop()
  );
  const score = scoreLetter(letter);
  total += score;
}

console.log(total);
