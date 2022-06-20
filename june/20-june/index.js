//https://www.codewars.com/kata/583203e6eb35d7980400002a

const countSmileys = (arr) => arr.filter(emoji => emoji.match(/[:;][-~]?[D)]/g)).length;