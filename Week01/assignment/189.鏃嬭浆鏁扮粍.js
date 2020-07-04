/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {void} Do not return anything, modify nums in-place instead.
   */
  var rotate = function (nums, k) {
    k = k % nums.length;
    let count = 0;
    for (let i = 0; count < nums.length; i++) {
      let start, prev;
      start = i;
      prev = nums[i];
      do {
        i = (i + k) % nums.length;
        [prev, nums[i]] = [nums[i], prev];
        count++;
      } while (start !== i);
    }
  };
  // @lc code=end
  