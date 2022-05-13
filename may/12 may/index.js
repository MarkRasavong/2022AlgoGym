const alphabetPosition = (text) => {
  const alphabeta = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const wordFilter = text.toLowerCase().match(/\w/ig);

  if (wordFilter === null) return ""

  return wordFilter
    .map(char => alphabeta.indexOf(char) + 1)
    .filter(idx => idx !== 0)
    .join(' ')
}

// clever
function alphabetPosition1(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(' ');
}