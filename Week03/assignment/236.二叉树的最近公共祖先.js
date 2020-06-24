/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * f(node) 代表 node 是 p 的父节点或 q 的祖先节点
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let ret;
    function dfs(node) {
        if (ret) return false;
        if (!node) return false;
        // node.left 是否为 p/q 祖先节点
        let left = dfs(node.left);
        // node.right 是否为 p/q 祖先节点
        let right = dfs(node.right);
        // node 本身为 p/q
        let self = node === p || node === q;

        if (left && right || self && (left || right))
            ret = node;

        // node 是否为 p/q 祖先节点等价于
        // node.left 为 p/q 祖先节点 或
        // node.right 为 p/q 祖先节点 或
        // node 为 p/q
        return left || right || self;
    }
    dfs(root);
    return ret;
};
// @lc code=end

