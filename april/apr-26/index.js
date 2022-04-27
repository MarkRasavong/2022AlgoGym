https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
// complete the function
function solution(str) {
  return str.split(/(?=[A-Z])/g).join(' ');
};

function solution1(string) {
  return string.replace(/([A-Z])/g, ' \$&');
};