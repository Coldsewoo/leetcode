/*
Given a sequence of n integers a1, a2, ..., an, a 132 pattern is a subsequence ai, aj, ak such that i < j < k and ai < ak < aj. Design an algorithm that takes a list of n numbers as input and checks whether there is a 132 pattern in the list.

Note: n will be less than 15,000.

Example 1:
Input: [1, 2, 3, 4]

Output: False

Explanation: There is no 132 pattern in the sequence.
Example 2:
Input: [3, 1, 4, 2]

Output: True

Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
Example 3:
Input: [-1, 3, 2, 0]

Output: True

Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  nums = nums.reduce((p, c, i, a) => {
    if (a[i] !== a[i + 1]) p.push(c);
    return p;
  }, [])
  for (let i = 0; i < nums.length; i++) {
    let needCheck = nums.slice(i, nums.length).filter(e => e > nums[i]);
    if (needCheck.length < 2) continue;
    for (let j = 0; j < needCheck.length - 1; j++) {
      if (needCheck[j] > needCheck[j + 1]) return true;
    }
  }
  return false;
};
var input = [1, -4, 2, -1, 3, -3, -4, 0, -3, -1]
find132pattern(input) // ?