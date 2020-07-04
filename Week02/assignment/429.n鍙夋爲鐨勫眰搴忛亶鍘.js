/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return []
    }
    const arr = []
    const queue = [[0, root]]
    while(queue.length) {
        const [level, node] = queue.shift()
        if (!arr[level]) arr[level] = []
        arr[level].push(node.val)
        if (Array.isArray(node.children)) {
            node.children.forEach(item => {
                queue.push([level + 1, item])
            })
        }
    }
    return arr
};
// @lc code=end

