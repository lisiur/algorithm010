/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
    const arr = []
    function dfs(node) {
        if (node) {
            dfs(node.left)
            arr.push(node.val)
            dfs(node.right)
        }
    }
    dfs(root)
    return arr
};
// @lc code=end

