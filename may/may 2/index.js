//https://www.codewars.com/kata/5511b2f550906349a70004e1/train/javascript

const lastDigit = function (str1, str2) {

  if (parseInt(str2) === 0) return 1;

  // because we only need the final digit of str1 to determine the result, let's capture it
  const seed = parseInt(str1.slice(-1)) % 10;
  // at worst, the result of any ending digit rotates through four cases, we need two digits here becasue 111%4 === 11%4 != 1%4
  const exp = parseInt(str2.slice(-2)) % 4;
  if (exp === 0) exp = 4;  // if the exponent is a multiple of 4, we want to use '4', not '0' in our function.

  return Math.pow(seed, exp) % 10;
}