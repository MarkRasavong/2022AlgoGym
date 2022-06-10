//https://www.codewars.com/kata/5680781b6b7c2be860000036/javascript

const vowelIndices = wrd => {
  let answers = [];
  let vowels = 'aieouyAEIOUY'

  wrd.split('').map((ltr, idx) => {
    if (vowels.includes(ltr)) {
      answers.push(idx + 1)
    }
  })
  return answers
}