const pigIt = (str) => (
  str
    .split(' ')
    .map(wrd => wrd.match(/[a-z]+/gi) ? `${wrd.slice(1)}${wrd.charAt(0) + 'ay'}` : wrd).join(' ')
)

//cleaner solution
const pigIt2 = (string) => (
  string.replace(/\w+/g, match => {
    return match.slice(1) + w[0] + 'ay'
  })
);

