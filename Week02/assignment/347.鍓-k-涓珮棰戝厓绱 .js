/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 0);
        }
        map.set(nums[i], map.get(nums[i]) + 1);
    }
    const arr = [...map.entries()].map(([k, v]) => [v, k]);
    quickSort(arr, 0, arr.length - 1, k);
    return arr.reverse().slice(0, k).map(v => v[1]);
};

function quickSort(nums, l, r, k) {
    if (l >= r) {
        return;
    }
    let target = nums[l];
    let ol = l;
    let or = r;
    while (l < r) {
        while (l < r && nums[r][0] > target[0]) r--
        if (l < r) nums[l++] = nums[r] 
        while (l < r && nums[l][0] <= target[0]) l++;
        if (l < r) nums[r--] = nums[l] 
        nums[l] = target
    }
    quickSort(nums, ol, l - 1, k);
    if (or >= k) {
        quickSort(nums, l + 1, or, k);
    }
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = topKFrequent;
// @after-stub-for-debug-end