//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/javascript
const longest = (s1, s2) => {
  const novoSort = new Set([...s1, ...s2].sort());

  return Array.from(novoSort).join('')
}

const longestClevr = (s1, s2) => [...new Set(s1 + s2)].sort().join('')