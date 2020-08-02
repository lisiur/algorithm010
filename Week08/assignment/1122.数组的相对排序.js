/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let map = new Map()
    for (let i = 0; i < arr2.length; i++) {
        map.set(arr2[i], i)
    }
    return arr1.slice().sort((a, b) => {
        let aIndex = map.has(a) ? map.get(a) : (arr2.length + a)
        let bIndex = map.has(b) ? map.get(b) : (arr2.length + b)
        return aIndex - bIndex
    })
};
// @lc code=end

