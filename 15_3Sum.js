/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.

Example:
Given array nums = [-1, 0, 1, 2, -1, -4],
A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return nums;
  let result = [];
  let sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    for (let j = i + 1, k = sorted.length - 1; j < k;) {
      let temp = sorted[i] + sorted[j] + sorted[k];
      if (temp === 0) {
        result.push([sorted[i], sorted[j], sorted[k]])
        j += 1;
        k -= 1;
        while (j < k && sorted[j] === sorted[j - 1]) j += 1;
        while (j < k && sorted[k] === sorted[k + 1]) k -= 1;
      } else {
        if (temp > 0) k -= 1;
        else j += 1;
      }
    }
  }
  return result;
};

threeSum([-2, 0, 1, 1, 2]) //?