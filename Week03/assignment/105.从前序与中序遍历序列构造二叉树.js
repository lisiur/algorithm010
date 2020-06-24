/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
         this.val = val;
         this.left = this.right = null;
     }
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    function build(ps, pe, is, ie) {
        if (ps >= preorder.length) return null
        if (ps > pe || is > ie) return null 
        const rootVal = preorder[ps]
        const node = new TreeNode(rootVal)
        const rootIndex = inorder.findIndex(n => n === rootVal)

        node.left = build(ps + 1, ps + rootIndex - is, is, rootIndex - 1)
        node.right = build(ps + rootIndex + 1 - is, pe, rootIndex + 1, ie)
        return node
    }
    return build(0, preorder.length - 1, 0, inorder.length - 1)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = buildTree;
// @after-stub-for-debug-end