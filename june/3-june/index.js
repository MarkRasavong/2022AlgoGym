// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

const findShort = (s) => (
  s
    .split(' ')
    .sort((a, b) => a.length - b.length)[0]
    .length
)

// clever solution
function findShort2(s) {
  return Math.min(...s.split(" ").map(s => s.length));
}