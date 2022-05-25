//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

const firstNonRepeatingLetter = (s) => {
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    //loops entire strng to see if any returns negative first
    if (s.indexOf(char) == i && s.indexOf(char, i + 1) == -1) return char;
  }
  return ''
}