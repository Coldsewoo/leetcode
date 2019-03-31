"use strict"

/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;
  if (s.length === 2) {
    if (s.charAt(0) === s.charAt(1)) return s;
    return s.charAt(0);
  }
  const sArr = s.split('');
  const resultArr = [];
  for (let i = 0; i < s.length; i++) {
    // cbaxabc pattern
    let temp = sArr[i];
    while (true) {
      let index = Math.ceil(temp.length / 2);
      if (i - index < 0) {
        resultArr.push(temp)
        break;
      }
      if (sArr[i - index] === sArr[i + index]) temp = `${sArr[i-index]}${temp}${sArr[i+index]}`
      else {
        resultArr.push(temp)
        break;
      }
    }
    // bacxxcab pattern
    if (sArr[i] === sArr[i + 1]) {
      let temp = `${sArr[i]}${sArr[i+1]}`
      while (true) {
        let index = temp.length / 2;
        if (i - index < 0) {
          resultArr.push(temp)
          break;
        }
        if (sArr[i - index] === sArr[i + index + 1]) temp = `${sArr[i-index]}${temp}${sArr[i+index+1]}`
        else {
          resultArr.push(temp)
          break;
        }
      }
    }

  }
  return resultArr.reduce((p, c) => {
    if (c.length > p.length) p = c;
    return p
  }, '')
};