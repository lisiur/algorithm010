/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const arr = []
    function dfs(node) {
        if (node) {
            arr.push(node.val)
            dfs(node.left)
            dfs(node.right)
        }
    }
    dfs(root)
    return arr
};
// @lc code=end

