import {
  notDeepEqual
} from 'assert'

/**
Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.
Example 1: 
Input:
0 0 0
0 1 0
0 0 0
Output:
0 0 0
0 1 0
0 0 0
Example 2: 
Input:
0 0 0
0 1 0
1 1 1
Output:
0 0 0
0 1 0
1 2 1
Note:
The number of elements of the given matrix will not exceed 10,000.
There are at least one 0 in the given matrix.
The cells are adjacent in only four directions: up, down, left and right.
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  //result matrix
  const xLen = matrix.length
  const yLen = matrix[0].length
  const result = new Array(xLen)
  const nodeArr = new Array(xLen)
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(yLen)
    nodeArr[i] = new Array(yLen)
  }

  // constructor for making new Node
  function makeNode(x, y) {
    this.x = x
    this.y = y
    this.heuristic = matrix[this.x][this.y] === 0 ? 0 : Infinity
    this.neighbors = []
    this.final = this.heuristic === 0 ? true : false
    this.addNeighbors = () => {
      if (this.x > 0) this.neighbors.push(nodeArr[this.x - 1][this.y])
      if (this.x < xLen - 1) this.neighbors.push(nodeArr[this.x + 1][this.y])
      if (this.y > 0) this.neighbors.push(nodeArr[this.x][this.y - 1])
      if (this.y < yLen - 1) this.neighbors.push(nodeArr[this.x][this.y + 1])
    }
    this.addHeuristic = neighbors => {
      for (let neighbor of neighbors) {
        if (neighbor.final === true && neighbor.heuristic < this.heuristic) {
          this.heuristic = neighbor.heuristic + 1
          this.final = true
        }
      }
    }
  }
  const openSet = []
  // make nodes and push into openSet if heuristic === 0
  for (let x = 0; x < xLen; x++) {
    for (let y = 0; y < yLen; y++) {
      nodeArr[x][y] = new makeNode(x, y)
      if (nodeArr[x][y].heuristic === 0) openSet.push(nodeArr[x][y])
    }
  }

  // bfs algorithm
  while (openSet.length > 0) {
    const current = openSet.shift()
    current.addNeighbors()
    current.addHeuristic(current.neighbors)
    for (let neighbor of current.neighbors) {
      if (neighbor.final === false) openSet.push(neighbor)
    }
  }
  // return result
  for (let x = 0; x < xLen; x++) {
    for (let y = 0; y < yLen; y++) {
      result[x][y] = nodeArr[x][y].heuristic
    }
  }
  return result;
}

const matrix = [
  [0, 1, 0, 1, 1],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [1, 0, 1, 1, 1],
  [1, 0, 0, 0, 1]
]

updateMatrix(matrix) // ?