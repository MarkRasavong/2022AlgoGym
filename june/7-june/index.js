//https://www.codewars.com/kata/558fc85d8fd1938afb000014

const sumTwoSmallestNumbers = (numbers) => numbers.sort((a, b) => b - a).slice(-2).reduce((acc, curr) => acc + curr)

//Clever

function sumTwoSmallestNumbers1(numbers) {
  let [firstIdx, secondIdx] = numbers.sort((a, b) => a - b)
  return firstIdx + secondIdx
};