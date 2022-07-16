//https://www.codewars.com/kata/555086d53eac039a2a000083/
const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 === 0 ? false : true

//Clever

function lovefunc2(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}