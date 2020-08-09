/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ')
    // const words = []
    // let i = 0
    // let wordChars = []
    // while (i < s.length) {
    //     while(i < s.length && s[i] === ' ') i++;
    //     wordChars.length = 0
    //     while(i < s.length && s[i] !== ' ') {
    //         wordChars.push(s[i++])
    //     }
    //     if (wordChars.length > 0) {
    //         words.push(wordChars.join(''))
    //     }
    // }
    // return words.reverse().join(' ')
};
// @lc code=end

