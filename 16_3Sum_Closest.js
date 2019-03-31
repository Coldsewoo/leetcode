/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  if (nums.length < 3) return nums.reduce((p, c) => p += c);
  let result = target;
  let difference = Infinity
  let sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length - 2; i++) {
    for (let j = i + 1, k = sorted.length - 1; j < k;) {
      let temp = sorted[i] + sorted[j] + sorted[k];
      if (Math.abs(temp - target) < difference) {
        result = temp;
        difference = Math.abs(temp - target)
        if (target - temp > 0) j += 1;
        else k -= 1;
      } else {
        if (temp - target < 0) j += 1;
        else k -= 1;
      }
    }
  }
  return result;
};

threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82) // ?