"use strict"

/*
Medium
Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function (s) {
  const sArr = s.split('');
  let index = 0;
  let result = []
  let resultNum = 0;
  while (index < sArr.length) {
    if (result.indexOf(sArr[index]) === -1) {
      result.push(sArr[index]);
      if (index === sArr.length - 1) resultNum = Math.max(resultNum, result.length)
      index++;
    } else {
      resultNum = Math.max(resultNum, result.length);
      index -= result.length - 1
      result = [];
    }
  }
  return resultNum;
};

lengthOfLongestSubstring("dvdf") // ?