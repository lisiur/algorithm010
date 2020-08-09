/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  const map = new Map()
  const set = new Set()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) {
        return false
      }
    } else {
      if (set.has(t[i])) {
        return false
      }
      map.set(s[i], t[i])
      set.add(t[i])
    }
  }
  return true
};
// @lc code=end

