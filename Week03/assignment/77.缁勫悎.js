/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const arr = [...new Array(n)].map((_, i) => i + 1);
    const ret = [];
    function rec(m, i = 0, cur = []) {
        if (m === 0) return ret.push(cur.slice());
        if (i >= n) return
        for (let j = i; j <= arr.length - m; ++j) {
            cur.push(arr[j]);
            rec(m - 1, j + 1, cur);
            cur.pop();
        }
    }
    rec(k);
    return ret
};
// @lc code=end

