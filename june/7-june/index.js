const sumTwoSmallestNumbers = (numbers) => numbers.sort((a, b) => b - a).slice(-2).reduce((acc, curr) => acc + curr)

//Clever

function sumTwoSmallestNumbers1(numbers) {
  var [a, b] = numbers.sort((a, b) => a - b)
  return a + b
}