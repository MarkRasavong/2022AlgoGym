//https://www.codewars.com/kata/55908aad6620c066bc00002a/javascript
const XO = str => {
  const equis = str.split('').filter(x => x.match(/x/ig)).length;
  const ohs = str.split('').filter(o => o.match(/o/ig)).length;

  return equis === ohs
}

//clever

const XOs = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}