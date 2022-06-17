const dontGiveMeFive = (strt, end) => {
  let result = [];

  for (let i = strt; i < (end + 1); i++) {
    result.push(i)
  };

  return result.filter(num => !String(num).includes('5')).length
}

//CLEVER
function dontGiveMeFive1(start, end) {
  let res = [];
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes('5')) res.push(i);
  }
  return res.length;
}