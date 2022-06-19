// https://www.codewars.com/kata/554ca54ffa7d91b236000023
const deleteNth = (arr, limit) => {
  let cache = {};

  arr.filter(n => {
    cache[n] = (cache[n] || 0) + 1; // loops thru and return k:v
    return cache <= limit; // each key should equal or be less than the limit
  }) // array returns n value by limit
}