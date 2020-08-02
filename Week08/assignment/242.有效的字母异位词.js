/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const arr = new Array(26).fill(0);
    const charCodeForA = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - charCodeForA]++;
    }
    for (let i = 0; i < t.length; i++) {
        arr[t.charCodeAt(i) - charCodeForA]--;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) return false;
    }
    return true;
};
// @lc code=end

