/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let rst = 0
    while (n !== 0) {
        rst += 1
        n &= (n - 1)
    }
    return rst
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = hammingWeight;
// @after-stub-for-debug-end