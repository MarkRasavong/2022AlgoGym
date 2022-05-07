
//finding duplicate letters in strings
//case insensitive

const duplicateEncode = (word) => (
  // val = current value 
  // idx1 = idx of char in arr
  // arr => ref to array ([...word.toLowerCase()])
  [...word.toLowerCase()].map((val1, idx1, arr) => (
    // val2 = current value // idx2 => index of val2 in arr
    // when the values are the same && they are in different idxs do this ')' : '('
    arr.some((val2, idx2) => val1 === val2 && idx1 !== idx2) ? ')' : '('))
    .join('')
)

//arr.some will be run more than once due to map being called