//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

const narcissistic = (value) => (
  [...String(value)]
    .map(Number => (Math.pow(Number, String(value).length)))
    .reduce((acc, value) => acc + value, 0) === value
);