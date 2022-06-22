//https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
const positiveSum = (arr) => arr.filter(n => n > 0).reduce((accum, curr) => accum + curr, 0)