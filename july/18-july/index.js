//https://www.codewars.com/kata/57eaeb9578748ff92a000009/solutions/javascript

function sumMix(x) {
  return x.map(a => +a).reduce((a, b) => a + b);
}