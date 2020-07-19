/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    if (s.length === 0) return 0;
    s = ' ' + s;
    let res = 0;
    const dp = [new Set()];
    let prev = s[0];
    let lastSameIndex = 0;
    for (let i = 1; i < s.length; ++i) {
        dp[i] = new Set([i]);
        if (prev !== s[i]) {
            lastSameIndex = i;
            prev = s[i];
        } else {
            for (let j = lastSameIndex; j < i; ++j) {
                dp[i].add(j);
            }
        }
    }
    for (let i = 1; i < s.length; ++i) {
        const last = [...dp[i - 1]];
        for (let j = 0; j < last.length; ++j) {
            if (s[i] === s[last[j] - 1]) {
                dp[i].add(last[j] - 1);
            }
        }
        res += dp[i].size;
    }
    return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = countSubstrings;
// @after-stub-for-debug-end