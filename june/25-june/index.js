var containsDuplicate = function (nums) {
  let cache = {}
  //should not repeat more than once
  const repeatedNums = nums.filter(n => {
    cache[n] = (cache[n] || 0) + 1;

    return cache[n] > 1
  });

  return repeatedNums.length === 0 ? false : true;
};