/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const arr = strs.map(str => [[...str].sort().join(''), str]).sort((a, b) => a[0] > b[0] ? 1 : -1);
    const res = [];
    let prev = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === prev) {
            res[res.length - 1].push(arr[i][1]);
        } else {
            prev = arr[i][0];
            res[res.length] = [arr[i][1]];
        }
    }
    return res;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    let keyArr = new Array(26);
    /**
     * @param {string} str
     */
    function getKey(str) {
        keyArr.fill(0);
        for (let i = 0; i < str.length; i++) {
            keyArr[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        return keyArr.join('#');
    }
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        const key = getKey(strs[i]);
        if (map.has(key)) {
            map.get(key).push(strs[i]);
        } else {
            map.set(key, [strs[i]]);
        }
    }
    return [...map.values()];
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = groupAnagrams;
// @after-stub-for-debug-end