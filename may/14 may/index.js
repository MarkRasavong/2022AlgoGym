const uniqueInOrder = (iterable) => {
  if ([...iterable].length === 0) return []
  return [...iterable]
    .join('')
    .match(/([^])\1+|[^]/g)
    .map(char => isNaN(char) ? char.charAt(0) : Number(char.charAt(0)))
};

//clever solution
const uniqueInOrder1 = (iterable) => [...iterable].filter((curr, idx) => curr !== iterable[idx - 1]);

