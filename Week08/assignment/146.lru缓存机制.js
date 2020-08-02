/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
class Node {
  constructor(key, val) {
    this.key = key
    this.val = val
    this.next = null
    this.prev = null
  }
}
function moveNodeAfter(node1, node2) {
  node2.prev.next = node2.next
  node2.next.prev = node2.prev
  node2.next = node1.next
  node1.next.prev = node2
  node1.next = node2
  node2.prev = node1
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.map = new Map()
  this.cache = new Node(-1, 0)
  this.cache.next = this.cache.prev = this.cache
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
    let target = this.map.get(key)
    moveNodeAfter(this.cache, target)
    return target.val
  } else {
    return -1
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    const target = this.map.get(key)
    target.val = value
    moveNodeAfter(this.cache, target)
  } else {
    if (this.cache.val >= this.capacity) {
      const target = this.cache.prev
      this.map.delete(target.key)
      target.key = key
      target.val = value
      this.map.set(key, target)
      moveNodeAfter(this.cache, target)
    } else {
      const target = new Node(key, value)
      this.map.set(key, target)
      this.cache.val += 1
      const next = this.cache.next
      this.cache.next = target
      target.prev = this.cache
      target.next = next
      next.prev = target
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end


// @after-stub-for-debug-begin
module.exports = LRUCache;
// @after-stub-for-debug-end

const cache = new LRUCache(2)
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4