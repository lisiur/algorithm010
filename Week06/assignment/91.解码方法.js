/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const res = s[0] === '0' ? [0, 0] : [1, 1]
  for (let i = 1; i < s.length; ++i) {
    const no = res[1] // 不被解析，则此时方案数为上一位被解析方案数
    let yes = s[i] === '0' ? 0 : res[1] // 被解析，则被解析成一位的方案数为上一位被解析的方案数
    if (
      s[i - 1] !== '0' &&
      (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] <= '6'))
    ) {
      yes += res[0] // 如果，和上一位能组合解析，则此时被解析的方案数为上一位不被解析的方案数
    }
    res[0] = no
    res[1] = yes
  }
  return res[1]
}
// @lc code=end

const input = '101'
const output = numDecodings(input)
console.log(output)
