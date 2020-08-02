## 位运算

异或

```js
x ^ 0 = x
x ^ 1s = ~x
x ^ (~x) = 1s
x ^ x = 0
```

指定位置位运算

```js
x & (~0<<n)        // 将 x 最右边的 n 位清零: 
(x >> n) & 1       // 获取 x 的第 n 位值
x & (1 << n)       // 获取 x 的第 n 位的幂值
x | (1 << n)       // 将 x 的第 n 位置为 1
x & (~(1 << n))    // 将 x 的第 n 位置为 0
x & ((1 << n) - 1) // 将 x 的最高位至第 n 位清零
```

## 布隆过滤器

一个很长的二进制向量和一系列随机映射函数。布隆过滤器可以用于检索一个元素是否在一个集合中。

优点：空间效率和查询时间远远超过一般算法。

缺点：有一定的误识别率，删除困难。

只能确定不存在，不能确定存在。适用于最外层的查询过滤。

## LRU Cache

双向链表 + Map

## 排序

- 初级排序
  - 选择排序(Selection Sort)
    > 每次找最小值，然后放到待排序数组的起始位置
  - 插入排序(Insertion Sort)
    > 从前到后逐步构建有序序列；对于未排序数据，在已排序序列中从后向前扫描，找到对应位置并插入。
  - 冒泡排序(Bubble Sort)
    > 嵌套循环，每次查看相邻的元素，如果逆序，则交换。
- 高级排序
  - 快速排序(Quick Sort)
    > 数组取标杆 pivot, 将小元素放 pivot 左边，大元素放右边，然后依次对左边和右边子数组快排。
    ```js
    function quickSort(arr, begin, end) {
        if (end <= begin) return
        const pivot = partition(arr, begin, end)
        quickSort(arr, begin, pivot - 1)
        quickSort(arr, pivot + 1, end)
    }
    function partition(arr, begin, end) {
        let counter = begin
        for (let i = begin; i < end; i++) {
            if (arr[i] < arr[end]) {
                [arr[counter], arr[i]] = [arr[i], arr[counter]]
                counter++
            }
        }
        [arr[counter], arr[end]] = [arr[end], arr[counter]]
        return counter
    }
    ```
  - 归并排序(Merge Sort)
    > 把输入序列二分成两个子序列，对两个子序列分别采用归并排序，将排好序的子序列合并。
    ```js
    function mergeSort(arr, left, right) {
        if (right <= left) return
        let mid = (left + right) >> 1
        mergeSort(arr, left, mid)
        mergeSort(arr, mid+1, right)
        merge(arr, left, mid, right)
    }
    function merge(arr, left, mid, right) {
        const tmp = Array(right - left + 1)
        let i = left, j = mid + 1, k = 0;
        while (i <= mid && j <= right) {
            tmp[k++] = arr[i] < arr[j] ? arr[i++] : arr[j++]
        }
        while (i <= mid) tmp[k++] = arr[i++]
        while (j <= right) tmp[k++] = arr[j++]

        for (let p = 0; p < tmp.length; p++) {
            arr[left + p] = tmp[p]
        }
    }
    ```
  - 堆排序(Heap Sort)
    > 数组元素依次插入小顶堆，再依次取出堆顶元素并删除
- 特殊排序
  - 计数排序
  - 桶排序
  - 基数排序