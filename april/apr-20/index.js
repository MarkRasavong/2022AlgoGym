/*
https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing 
second character of the final pair with an underscore ('_').
*/

function solution(str) {
  if (str === "") return [];

  const pairsArrExtra = str.match(/.{1,2}/g);
  const pairsArr = str.match(/.{2}/g);
  const noPairs = pairsArrExtra.filter(pair => pair.length === 1).map(pair => `${pair}_`);

  return !noPairs ? pairsArr : pairsArr.concat(noPairs);
}

function btrSolution(str) {
  return (str + "_").match(/.{2}/g) || []
}