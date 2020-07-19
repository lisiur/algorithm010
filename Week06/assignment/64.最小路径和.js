/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const m = grid.length
  if (m === 0) {
    return 0
  }
  const n = grid[0].length

  for (let i = 1; i < m; ++i) {
    grid[i][0] += grid[i-1][0]
  }
  for (let i = 1; i < n; ++i) {
    grid[0][i] += grid[0][i-1]
  }
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1])
    }
  }
  return grid[m-1][n-1]
};
// @lc code=end

const input = []

const output = minPathSum(input)
console.log(output)

