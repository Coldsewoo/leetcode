"use strict"

/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
You may assume nums1 and nums2 cannot be both empty.

Example 1;
nums1 = [1, 3]
nums2 = [2]
The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]
The median is (2 + 3)/2 = 2.5
*/
var nums1 = [-1, -2]
var nums2 = [3]

var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a, b) => a - b);
  return arr.length % 2 === 1 ? arr[arr.length / 2 - 0.5] : (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
};

findMedianSortedArrays(nums1, nums2); // ?