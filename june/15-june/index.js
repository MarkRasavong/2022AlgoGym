//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/javascript

const findShort = str => str.split(' ').sort((a, b) => a.length - b.length)[0].length;

//CLEVER
function findShort1(s) {
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
