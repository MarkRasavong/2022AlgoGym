//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

//MY SOLUTION
const createPhoneNumber = (numArr) => {
  const strArr = numArr.join('');
  const numSlice = (idx1, idx2) => strArr.slice(idx1, idx2);
  return `(${numSlice(0, 3)}) ${numSlice(3, 6)}-${numSlice(6, 12)}`
}

//CLEVER SOLUTION
function createPhoneNumber1(numbers) {
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}