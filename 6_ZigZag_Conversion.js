/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
*/

var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const result = new Array(numRows);
  for (let i = 0; i < result.length; i++) {
    result[i] = '';
  }
  let direction = true;
  result[0] = s.charAt(0);
  let temp = s.substring(1)
  let index = 1;
  while (temp.length > 0) {
    result[index] = result[index] + temp.charAt(0);
    temp = temp.substring(1);
    if (index == 0 || index == result.length - 1) direction = !direction;
    if (direction) index += 1
    else index -= 1
  }
  return result.join('')
};

const s = "PAYPALISHIRING"
const numRows = 4;
convert(s, numRows) //?