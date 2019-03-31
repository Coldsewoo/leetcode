/*
Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?
*/

var isPalindrome = function (x) {
  return x.toString().split('').reverse().join('') === x.toString()
};

var isPalindrome = function (x) {
  let index = 0;
  while (x / 10 ** index >= 1) index += 1;
  index -= 1;
  let result = [];
  while (index >= 0) {
    item = Math.floor(x / 10 ** index)
    x = x - (x - Math.floor(x % 10 ** index))
    result.push(item);
    index -= 1;
  }
  return result.join('') === result.reverse().join('')
};

isPalindrome(10) // ?