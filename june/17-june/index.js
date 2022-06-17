const dontGiveMeFive = (strt, end) => {
  let result = [];

  for (let i = strt; i < (end + 1); i++) {
    result.push(i)
  };

  return result.filter(num => !String(num).includes('5')).length
}