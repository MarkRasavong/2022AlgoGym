//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

const moveZeros = (arr) => {
  const zeros = arr.filter(num => num === 0)
  const notZeros = arr.filter(num => num !== 0)
  // moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
  return [...notZeros, ...zeros]
};