//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/javascript


const openOrSenior = (data) => data.map(
  age => (age[0] >= 55) && (age[1] > 7) ? 'Senior' : 'Open'
)

function openOrSeniorClevr(data) {
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
