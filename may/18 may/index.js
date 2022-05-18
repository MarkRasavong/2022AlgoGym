//https://www.codewars.com/kata/523a86aa4230ebb5420001e1/solutions/javascript
//my solution
const anagrams = (word, words) => (
  words.filter(wrd => [...wrd].sort().join('') === [...word].sort().join(''))
)