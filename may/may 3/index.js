// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

const solution = (num) => {
  const multiple = [];
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiple.push(i)
    }
  }

  if (multiple.length === 0 || num < 0) return 0
  return multiple.reduce((acc, val) => acc + val)
}