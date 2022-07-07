//https://www.codewars.com/kata/57f781872e3d8ca2a000007e/

const maps = x => x.map(n => n * 2);

string.Prototype.toJadenCase = function () {
  return this.split(' ').map(wrd => wrd[0].toUpperCase() + wrd.slice(1))
}