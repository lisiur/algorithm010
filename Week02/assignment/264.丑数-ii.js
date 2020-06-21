/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let arr = [1]
    let p2, p3, p5
    let v2, v3, v5
    p2 = p3 = p5 = 0
    while (--n) {
        v2 = arr[p2] * 2
        v3 = arr[p3] * 3
        v5 = arr[p5] * 5
        const min = Math.min(v2, v3, v5)
        if (v2 === min) ++p2
        if (v3 === min) ++p3
        if (v5 === min) ++p5
        arr.push(min)
    }
    return arr[arr.length - 1]
};
// @lc code=end

