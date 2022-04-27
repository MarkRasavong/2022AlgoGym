//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

const spinWords = (str) => str.split(' ').map(word => word.length >= 5 ? [...word].reverse().join('') : word).join(' ');
