/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (51.18%)
 * Likes:    1344
 * Dislikes: 0
 * Total Accepted:    107.8K
 * Total Submissions: 210.6K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 *
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢
 * Marcos 贡献此图。
 *
 * 示例:
 *
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 *
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length === 0) {
    return 0;
  }
  let sum = 0

  // 查找右边界
  const maxRightHeight = [0]
  for (let i = height.length - 2; i >= 0; i--) {
    // NOTE: 讲道理应该用 unshift，考虑到数组操作性能，改用push
    // NOTE: 后续使用需转换 index，或 reverse 一下
    maxRightHeight.push(Math.max(maxRightHeight[maxRightHeight.length - 1], height[i+1]))
  }

  // 查找左边界，同时判断当前能接到的雨水数
  const maxLeftHeight = [0];
  for (let i = 1; i < height.length - 1; i++) {
    maxLeftHeight.push(Math.max(maxLeftHeight[maxLeftHeight.length - 1], height[i-1]));
    // 获取当前左右边界能达到的最大高度
    const maxHeight = Math.min(maxLeftHeight[i], maxRightHeight[height.length - i - 1])
    // Math.max(maxHeight, height[i]) 为当前积满雨水所达到的高度
    sum += (Math.max(maxHeight, height[i]) - height[i])
  }
  return sum;
};
// @lc code=end
