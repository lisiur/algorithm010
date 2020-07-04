# 第二周学习笔记

## 哈希表

哈希表 (Hash table)，也叫散列表，是根据关键码值 (Key value) 而直接进行访问的数据结构。

他通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度。

这个映射函数叫做散列函数 (Hash Function)，存放数据的数组叫做哈希表（或散列表）

## 映射 (Map)

- HashMap
- TreeMap

## 集合 (Set)

Map 的一个特例

## 二叉树

```ts
interface TreeNode {
    val: any
    left: TreeNode | null
    right: TreeNode | null
}
```

### 递归遍历

```js
// 前序
function dfs(node) {
    const ret = []
    if (node) {
        ret.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    return ret
}
// 中序
function dfs(node) {
    const ret = []
    if (node) {
        dfs(node.left)
        ret.push(node.val)
        dfs(node.right)
    }
    return ret
}
// 后序
function dfs(node) {
    const ret = []
    if (node) {
        dfs(node.left)
        dfs(node.right)
        ret.push(node.val)
    }
    return ret
}

```

### 非递归遍历

```js
var traversal = function(root) {
    if (!root) {
        return []
    }
    const [INIT, VIEWED] = [0, 1]
    const ret = []
    const stack = [[INIT, root]]
    while (stack.length) {
        const [status, node] = stack.pop()
        if (!node) continue
        if (status === INIT) {
            stack.push([VIEWED, node])     // @1
            stack.push([INIT, node.right]) // @2
            stack.push([INIT, node.left])  // @3
        } else {
            ret.push(node.val)
        }
    }
    return ret
};

// 调整 @1 @2 @3 的位置即可实现三种遍历方式的切换
```

## 二叉搜索树

二叉搜索树，也称为二叉排序树、有序二叉树（Ordered Binary Tree）或有序二叉树（Sorted Binary Tree），是指一颗空树或者举又下列性质的树：

1. 左子树上**所有节点**的值均小于它的根节点的值；
2. 右子树上**所有节点**的值均大于他的根节点的值；
3. 以此类推：左、右子树也分别为二叉搜索树。

## 堆

Heap：可以迅速找到一堆树中的最大或最小值的数据结构。

将根节点最大的堆叫做大顶堆或大根堆，根节点最小的堆叫做小顶堆或小根堆。常见的堆有二叉堆、斐波那契堆等。

## 二叉堆

二叉堆是堆的一种实现方案，底层使用二叉树结构。

- Insert（HeapifyUp）
  1. 新元素一律先插入到堆的尾部
  2. 依次向上调整整个堆的结构（一直到根即可） 
- Delete Max（HeapifyDown)
  1. 将堆尾元素替换到顶部（即堆顶被替代删除掉）
  2. 依次从根部向下调整整个堆的结构（一直到堆尾即可）

## 图

Graph(V, E)


V(vertex): 点
    1. 度：入度和出度
    2. 点与点之间：连通与否

E(edge): 边
    1. 有向和无向(单行线)
    2. 权重(边长)

### 图的表示

1. 邻接矩阵
2. 邻接表

### 常见算法

1. DFS
2. BFS
3. [连通图个数](https://leetcode-cn.com/problems/number-of-islands/)
4. [拓扑排序](https://zhuanlan.zhihu.com/p/34871092)
5. [最短路径](https://www.bilibili.com/video/av25829980?from=search&seid=13391343514095937158)
6. [最小生成树](https://www.bilibili.com/video/av84820276?from=search&seid=17476598104352152051)