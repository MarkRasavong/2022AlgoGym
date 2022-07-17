//https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

const removeSmallest = (numbers) => {
  const copy = numbers.slice(0)
  let smallestValue = numbers.indexOf(Math.min(...numbers))
  copy.splice(smallestValue, 1);
  return copy
}

//clever
const removeSmalles1t = numbers => numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));


function removeSmallest2(numbers) {
  const min = Math.min.apply(this, numbers);
  return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}