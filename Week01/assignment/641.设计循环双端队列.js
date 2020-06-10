/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  this.capacity = k
  this.size = 0
  this.head = {}
  this.tail = {}
  this.head.next = this.tail
  this.tail.prev = this.head
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.isFull()) {
    return false
  }
  const next = this.head.next
  this.head.next = {
    prev: this.head,
    next,
    value,
  }
  next.prev = this.head.next
  this.size += 1
  return true
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.isFull()) {
    return false
  }
  const prev = this.tail.prev
  this.tail.prev = {
    value,
    prev,
    next: this.tail
  }
  prev.next = this.tail.prev
  this.size += 1
  return true
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if (this.size === 0) {
    return false
  }
  this.head.next = this.head.next.next
  this.head.next.prev = this.head
  this.size -= 1
  return true
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if (this.size === 0) {
    return false
  }
  this.tail.prev = this.tail.prev.prev
  this.tail.prev.next = this.tail
  this.size -= 1
  return true
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if (this.size === 0) {
    return -1
  }
  return this.head.next.value
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if (this.size === 0) {
    return -1
  }
  return this.tail.prev.value
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return this.size === 0
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return this.size === this.capacity
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

const actions = ["insertFront","getRear","deleteLast","getRear","insertFront","insertFront","insertFront","insertFront","isFull","insertFront","isFull","getRear","deleteLast","getFront","getFront","insertLast","deleteFront","getFront","insertLast","getRear","insertLast","getRear","getFront","getFront","getFront","getRear","getRear","insertFront","getFront","getFront","getFront","getFront","deleteFront","insertFront","getFront","deleteLast","insertLast","insertLast","getRear","getRear","getRear","isEmpty","insertFront","deleteLast","getFront","deleteLast","getRear","getFront","isFull","isFull","deleteFront","getFront","deleteLast","getRear","insertFront","getFront","insertFront","insertFront","getRear","isFull","getFront","getFront","insertFront","insertLast","getRear","getRear","deleteLast","insertFront","getRear","insertLast","getFront","getFront","getFront","getRear","insertFront","isEmpty","getFront","getFront","insertFront","deleteFront","insertFront","deleteLast","getFront","getRear","getFront","insertFront","getFront","deleteFront","insertFront","isEmpty","getRear","getRear","getRear","getRear","deleteFront","getRear","isEmpty","deleteFront","insertFront","insertLast","deleteLast"]
const params = [[89],[],[],[],[19],[23],[23],[82],[],[45],[],[],[],[],[],[74],[],[],[98],[],[99],[],[],[],[],[],[],[8],[],[],[],[],[],[75],[],[],[35],[59],[],[],[],[],[22],[],[],[],[],[],[],[],[],[],[],[],[21],[],[26],[63],[],[],[],[],[87],[76],[],[],[],[26],[],[67],[],[],[],[],[36],[],[],[],[72],[],[87],[],[],[],[],[85],[],[],[91],[],[],[],[],[],[],[],[],[],[34],[44],[]]

var res = []
var obj = new MyCircularDeque(77)

actions.forEach((it, index) => {
  const a = obj[it](params[index][0])
  console.log(a)
})
