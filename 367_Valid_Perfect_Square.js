/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true
Example 2:

Input: 14
Output: false
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let index = 2;
  while (index * index <= num) {
    if (num % (index * index) === 0) num = num / (index * index);
    else index += 1;
  }
  return num === 1
};
isPerfectSquare(125136) // ?