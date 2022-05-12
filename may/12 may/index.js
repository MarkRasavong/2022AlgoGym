const alphabetPosition = (text) => {
  const alphabeta = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const wordFilter = text.toLowerCase().match(/\w/ig);

  if (wordFilter === null) return ""

  return wordFilter
    .map(char => alphabeta.indexOf(char) + 1)
    .filter(idx => idx !== 0)
    .join(' ')
}