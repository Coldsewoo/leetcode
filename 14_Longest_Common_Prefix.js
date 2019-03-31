/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  strs = strs.map(e => e.split(''))
  let strsLen = Math.min(...strs.map(e => e.length))
  let result = new Array(strsLen)
  for (let item of strs) {
    for (let index in item) {
      if (index < strsLen) {
        if (!result[index]) result[index] = item[index];
        else if (result[index] !== item[index]) result[index] = ' ';
        else result[index] = item[index]
      }
    }
  }
  return result.join('').split(/\s/)[0]
};

longestCommonPrefix(["", "b"]) // ?