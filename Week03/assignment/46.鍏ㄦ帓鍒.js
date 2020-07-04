/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  return rec(nums)
};

function rec(arr, pre = [], index = 0, rst = []) {
  if (index === arr.length) {
    rst.push(pre)
  }
  for (let i = index; i < arr.length; i++) {
    exchange(arr, index, i)
    rec(arr, [...pre, arr[index]], index + 1, rst)
    exchange(arr, index, i)
  }
  return rst
}

function exchange(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

// @lc code=end

// @after-stub-for-debug-begin
module.exports = permute;
// @after-stub-for-debug-end