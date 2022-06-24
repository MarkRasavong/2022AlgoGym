//https://leetcode.com/problems/two-sum/submissions/

function twoSum(nums, target) {
  for (let idx1 = 0; idx1 < nums.length; idx1++) {
    for (let idx2 = idx1 + 1; idx2 < nums.length; idx2++) {
      if (nums[idx1] + nums[idx2] === target) return [idx1, idx2];
    }
  }
};