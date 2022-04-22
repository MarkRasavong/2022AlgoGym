// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript  7kyu
function squareDigits(num) {
  return Number(num.toString().split("").map(n => Math.pow(n, 2)).join(""));
};

