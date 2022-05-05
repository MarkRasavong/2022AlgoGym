//https://www.codewars.com/kata/54da5a58ea159efa38000836/solutions/javascript
// My Solution
const findOdd = (arr) => {
  const count = arr.reduce((acc, val) => {
    return { ...acc, [val]: (acc[val] || 0) + 1 }
  }, {});

  return Number(Object.keys(count).find(key => count[key] % 2 !== 0));
};

//Clever Solution
const findOdd1 = (xs) => xs.reduce((a, b) => a ^ b);