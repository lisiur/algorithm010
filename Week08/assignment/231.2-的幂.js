/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let a = 1;
  while (n >= a) {
    if (n === a) {
      return true;
    }
    a = a * 2;
  }
  return false;
};

var isPowerOfTwo = function (n) {
  if (n == 0) return false;
  return !(n & (n - 1));
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPowerOfTwo;
// @after-stub-for-debug-end