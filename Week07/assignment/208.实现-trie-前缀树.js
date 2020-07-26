/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
class Node {
    constructor(val) {
        this.val = val;
        this.children = new Map();
        this.done = false;
    }
}
/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = new Node();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.root;
    for (let i = 0; i < word.length; ++i) {
        if (node.children.has(word[i])) {
            node = node.children.get(word[i]);
        } else {
            const newNode = new Node(word[i]);
            node.children.set(word[i], newNode);
            node = newNode;
        }
    }
    node.done = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.root;
    for (let i = 0; i < word.length; ++i) {
        if (node.children.has(word[i])) {
            node = node.children.get(word[i]);
        } else {
            return false;
        }
    }
    return node.done;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; ++i) {
        if (node.children.has(prefix[i])) {
            node = node.children.get(prefix[i]);
        } else {
            return false;
        }
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end


// @after-stub-for-debug-begin
module.exports = Trie;
// @after-stub-for-debug-end