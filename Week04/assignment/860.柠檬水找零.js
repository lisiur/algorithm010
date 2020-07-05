/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const changes = [0, 0]
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            changes[0]++
        } else if (bills[i] === 10) {
            if (changes[0] > 0) {
                changes[0]--
                changes[1]++
            } else {
                return false
            }
        } else {
            if (changes[1] > 0 && changes[0] > 0) {
                changes[0]--
                changes[1]--
            } else if (changes[1] === 0 && changes[0] > 2) {
                changes[0]-=3
            } else {
                return false
            }
        }
    }
    return true
};
// @lc code=end

