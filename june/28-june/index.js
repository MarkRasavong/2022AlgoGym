/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * two pointers
 * https://www.youtube.com/watch?v=FhIhUy8bZww 
*/
var merge = function (nums1, m, nums2, n) {
  let first = m - 1,
    second = n - 1,
    i = m + n - 1;

  //while we have elements in second
  while (second >= 0) {
    let firstVal = nums1[first],
      secondVal = nums2[second];

    if (firstVal > secondVal) {
      nums1[i] = firstVal;
      i--;
      first--;
    } else {
      nums1[i] = secondVal;
      i--;
      second--;
    }
  }
};

/*
Runtime: 109 ms, faster than 15.80% of JavaScript online submissions for Merge Sorted Array.
Memory Usage: 42.1 MB, less than 62.33% of JavaScript online submissions for Merge Sorted Array.
*/