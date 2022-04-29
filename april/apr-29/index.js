// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript

/*
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)
*/

const findOutlier = (intergers) => {
  const filterOdd = intergers.filter(int => int % 2 !== 0);

  if (filterOdd.length > 1) {
    return intergers.filter(int => int % 2 == 0)[0];
  } else {
    return filterOdd[0];
  }
}

function findOutlierAltra(int) {
  var even = int.filter(a => a % 2 == 0);
  var odd = int.filter(a => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}