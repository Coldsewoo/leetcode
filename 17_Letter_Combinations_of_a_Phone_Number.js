/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return []
  let items = digits.toString().split('')
  const possible = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  let result = [];
  let current = items.shift()
  let chars = possible[current].split('')
  result = chars.map(e => e)
  while (items.length) {
    current = items.shift()
    const index = result.length
    chars = possible[current].split('')
    result.forEach(item => {
      chars.forEach(char => {
        result.push(item + char)
      })
    })
    result = result.slice(index)
  }
  return result
};

letterCombinations(8888888); //?