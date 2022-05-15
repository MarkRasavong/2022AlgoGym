//https://www.codewars.com/kata/517abf86da9663f1d2000003/javascript

const toCamelCase = (str) => {
  if (str.length === 0) return ''

  return str
    .match(/([A-Za-z]+)/g)
    .map((el, idx) => idx != 0 ? el.charAt(0).toUpperCase() + el.substring(1) : el)
    .join('');
}

//clever
// captures -\w => replaces the 2nd char and toUpperCases it and discard the [-_]
const toCamelCase1 = (str) => str.replace(/[-_]\w/ig, (match) => match.charAt(1).toUpperCase());