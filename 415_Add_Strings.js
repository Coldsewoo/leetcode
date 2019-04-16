/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let num1Arr = num1.split('').reverse().map(Number);
  let num2Arr = num2.split('').reverse().map(Number);
  const result = [];
  let overHead = 0;
  while (num1Arr.length > 0 || num2Arr.length > 0) {
    let temp1 = num1Arr.length > 0 ? num1Arr.shift() : 0
    let temp2 = num2Arr.length > 0 ? num2Arr.shift() : 0
    let temp = temp1 + temp2 + overHead
    overHead = temp >= 10 ? 1 : 0
    temp = temp % 10;
    result.push(temp)
  }
  if (overHead === 1) result.push(1);
  return result.reverse().join('')
};

var num1 = "9"
var num2 = "1"

addStrings(num1, num2) // ?