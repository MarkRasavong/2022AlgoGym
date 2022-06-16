//https://www.codewars.com/kata/56606694ec01347ce800001b/javascript

const isTriangle = (a, b, c) => {
  if (a === 0, b === 0, c === 0) {
    return false;
  } else if (a + b <= c) {
    return false;
  } else if (c + b <= a) {
    return false;
  } else if (a + c <= b) {
    return false;
  }

  return true;
}

//CLEVER
var isTriangle2 = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2