const uniqueInOrder = (iterable) => {
  if ([...iterable].length === 0) return []
  return [...iterable]
    .join('')
    .match(/([^])\1+|[^]/g)
    .map(char => isNaN(char) ? char.charAt(0) : Number(char.charAt(0)))
}

//iterable.match(/([^])\1+|[^]/g).map(char => char.charAt(0))
//iterable.join('').match(/([^])\1+|[^]/g).map(char => char.charAt(0))