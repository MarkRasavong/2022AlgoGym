//https://leetcode.com/study-plan/data-structure/?progress=souuje2

var maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
};

/* 
Runtime: 187 ms, faster than 5.11% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 50.3 MB, less than 54.64% of JavaScript online submissions for Maximum Subarray.
*/

const numVal = str => {
  let result = [];
  let vowels = 'AEIOUYaeiouy'

  str.split('').map(ltr => {
    if (vowels.includes(ltr)) return result.push(ltr);
  })

  return result.length
}