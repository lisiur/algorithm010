/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s, cnt = 0) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            if (cnt === 1) return false;
            return validPalindrome(s.slice(left, right), 1) ||
                   validPalindrome(s.slice(left + 1, right + 1), 1);
        }
        left++
        right--
    }
    return true
};
// @lc code=end

