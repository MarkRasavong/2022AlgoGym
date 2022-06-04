//https://www.codewars.com/kata/5390bac347d09b7da40006f6/javascript

String.prototype.toJadenCase = function () {
  return this
    .split(' ')
    .map(wrd => wrd[0].toUpperCase() + wrd.slice(1))
    .join(' ')
};