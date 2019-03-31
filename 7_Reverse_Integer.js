/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
*/

var reverse = function (x) {
  let numStr = x.toString()
  let sign = ''
  if (numStr.charAt(0) == '-') {
    sign = '-'
    numStr = numStr.substring(1)
  }
  let reversed = numStr.split('').reverse().join('');
  while (reversed.charAt(0) === '0') {
    reversed = reversed.substring(1);
  }
  let result = ''
  if (sign === '-') {
    if (Number(reversed) > Math.pow(2, 31)) return 0;
    else result = sign + reversed;
  } else {
    if (Number(reversed) > Math.pow(2, 31) - 1) return 0;
    else result = reversed;
  }
  return result;
};

reverse(1534236469) // ?