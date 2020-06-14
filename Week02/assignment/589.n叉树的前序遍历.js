/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    const res = []
    function dfs(tree) {
        if (tree) {
            res.push(tree.val)
            if (Array.isArray(tree.children)) {
                tree.children.forEach(dfs)
            }
        }
    }
    dfs(root)
    return res
};

var preorder = function(root) {
    const res = []
    const stack = []
    stack.push(root)
    while(stack.length) {
        const node = stack.pop()
        if (node) {
            res.push(node.val)
            if (Array.isArray(node.children)) {
                for (let i = node.children.length - 1; i >=0; i--) {
                    stack.push(node.children[i])
                }
            }
        }
    }
    return res
}
// @lc code=end
