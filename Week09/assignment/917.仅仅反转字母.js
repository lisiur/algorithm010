/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let arr = S.split('')
    let left = 0,
        right = arr.length - 1
    while (left < right) {
        while (left < right && !isAlphabet(arr[left])) left ++
        while (left < right && !isAlphabet(arr[right])) right --
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
        }
        left ++; right--
    }
    return arr.join('')
};

/**
 * @param {string} c
 */
function isAlphabet(c) {
    const charCode = c.charCodeAt(0)
    return charCode >= 'A'.charCodeAt(0) &&
        charCode <= 'Z'.charCodeAt(0) ||
        charCode >= 'a'.charCodeAt(0) &&
        charCode <= 'z'.charCodeAt(0)
}
// @lc code=end

