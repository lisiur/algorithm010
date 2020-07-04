/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
    const arr = []
    function dfs(node) {
        if (node) {
            dfs(node.left)
            dfs(node.right)
            arr.push(node.val)
        }
    }
    dfs(root)
    return arr
};

var postorderTraversal = function(root) {
    if (!root) {
        return []
    }
    const [INIT, VIEWED] = [0, 1]
    const arr = []
    const stack = [[INIT, root]]
    while (stack.length) {
        const [status, node] = stack.pop()
        if (!node) continue
        if (status === INIT) {
            stack.push([VIEWED, node])
            stack.push([INIT, node.right])
            stack.push([INIT, node.left])
        } else {
            arr.push(node.val)
        }
    }
    return arr
};
// @lc code=end

