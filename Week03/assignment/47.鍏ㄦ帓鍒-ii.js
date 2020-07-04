/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort()
  return dfs(nums, new Array(nums.length).fill(0))
};

function dfs(arr, used, depth = 0, pre = [], rst = []) {
  if (depth === arr.length) {
    rst.push(pre)
    return
  }
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i-1] && !used[i-1]) {
      continue
    }
    if (!used[i]) {
      used[i] = 1
      dfs(arr, used, depth + 1, [...pre, arr[i]], rst)
      used[i] = 0
    }
  }
  return rst
}

// @lc code=end

console.log(permuteUnique([3,3,0,3]))

// @after-stub-for-debug-begin
module.exports = permuteUnique;
// @after-stub-for-debug-end