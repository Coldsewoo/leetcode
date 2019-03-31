'use strict'
/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let l1 = [9, 9];
let l2 = [1];



let l1Node = new ListNode(l1[l1.length - 1])
for (let i = l1.length - 2; i >= 0.; i--) {
  let node = new ListNode(l1[i]);
  node.next = l1Node;
  l1Node = node;
}

let l2Node = new ListNode(l2[l2.length - 1])
for (let i = l2.length - 2; i >= 0.; i--) {
  let node = new ListNode(l2[i]);
  node.next = l2Node;
  l2Node = node;
}

function addtwo(l1, l2) {
  let l1Arr = '';
  let l2Arr = '';
  while (l1.next) {
    l1Arr += l1.val.toString();
    l1 = l1.next;
  }
  l1Arr += l1.val.toString();
  while (l2.next) {
    l2Arr += l2.val.toString();
    l2 = l2.next;
  }
  l2Arr += l2.val.toString();
  l1Arr = l1Arr.toString().split('').map(e => parseInt(e));
  l2Arr = l2Arr.toString().split('').map(e => parseInt(e));
  let index = Math.max(l1Arr.length, l2Arr.length);
  let overhead = 0;
  let result = []

  for (let i = 0; i < index; i++) {
    let l1temp = l1Arr[i] ? l1Arr[i] : 0
    let l2temp = l2Arr[i] ? l2Arr[i] : 0
    let temp = l1temp + l2temp + overhead;
    overhead = temp >= 10 ? 1 : 0;
    temp = temp % 10;
    result.push(temp);
  }
  if (overhead === 1) result.push(1);
  result = result.map(e => parseInt(e))
  let resultNode = new ListNode(result[result.length - 1])
  for (let i = result.length - 2; i >= 0.; i--) {
    let node = new ListNode(result[i]);
    node.next = resultNode;
    resultNode = node;
  }
  return resultNode;
}

addtwo(l1Node, l2Node) //?