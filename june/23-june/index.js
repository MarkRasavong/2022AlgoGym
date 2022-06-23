//https://www.codewars.com/kata/550554fd08b86f84fe000a58
const inArray = (array1, array2) => array1.filter(wrd => array2.join(' ').includes(wrd)).sort();

//CLEVER
function inArray2(array1, array2) {
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}