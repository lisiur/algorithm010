/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
    if (M.length === 0) return 0;
    const n = M.length;
    const m = M[0].length;
    let cnt = 0;
    let visited = new Array(n);

    function dfs(i) {
        if (visited[i]) return
        visited[i] = 1
        for (let j = 0; j < m; j++) {
            if (M[i][j]) {
                dfs(j)
            }
        }
    }
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            cnt++
            dfs(i)
        }
    }
    return cnt;
};
// @lc code=end

