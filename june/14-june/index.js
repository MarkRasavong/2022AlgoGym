//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/javascript

const reverseWords = str => str
  .split(' ')
  .map(wrd => wrd.split('').reverse().join(''))
  .join(' ');
