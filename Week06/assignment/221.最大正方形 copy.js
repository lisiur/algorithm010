/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (matrix.length === 0) return 0;
    const n = matrix.length;
    const m = matrix[0].length;
    const dp = new Array(n);
    let max = 0
    for (let i = 0; i < dp.length; ++i) {
        if (matrix[i].indexOf('1') !== -1) {
            max = 1
        }
        dp[i] = matrix[i].map(n => +n);
    }
    for (let i = 1; i < n; ++i) {
        for (let j = 1; j < m; ++j) {
            if (matrix[i][j] === '1') {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                max = Math.max(max, dp[i][j])
            }
        }
    }
    return max * max
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = maximalSquare;
// @after-stub-for-debug-end