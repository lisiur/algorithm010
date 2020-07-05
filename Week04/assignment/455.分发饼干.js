/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let i = 0;
    let j = 0;
    let cnt = 0;
    while (i < g.length && j < s.length) {
        while (j < s.length && s[j] < g[i]) {
            j++;
        }
        if (j < s.length) {
            cnt++;
        }
        j++;
        i++;
    }
    return cnt;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findContentChildren;
// @after-stub-for-debug-end