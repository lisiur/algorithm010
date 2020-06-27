## 递归

```js
function recursion(level, params) {
    // recursion terminator
    if (level > MAX_LEVEL) {
        return
    }

    // process logic in current level
    process(level, params)

    // drill down
    recursion(level + 1, newParams)

    // reverse the current level status if needed
}
```

## 分治

```js
function divideConquer(problem, param1, param2, ...): 
  // recursion terminator 
  if problem is None: 
	print_result 
	return 
  // prepare data 
  data = prepareData(problem) 
  subProblems = splitProblem(problem, data) 
  # conquer subproblems 
  subResult1 = divideConquer(subProblems[0], p1, ...) 
  subResult2 = divideConquer(subProblems[1], p1, ...) 
  subResult3 = divideConquer(subProblems[2], p1, ...) 
  …
  // process and generate the final result 
  result = process_result(subResult1, subResult2, subResult3, …)
	
  // revert the current level states
```

## 回溯

回溯法采用试错的思想，它尝试分步的去解决一个问题。在分步解决问题的过程中，当它通过尝试发现现有的分步答案必能得到有效的正确的解答时，它将取消上一步甚至上几步的计算，再通过其它的可能的分步解答再次尝试寻找问题的答案。

回溯法通常用最简单的递归方法来实现，再反复重复上述的步骤后可能出现两种情况：

- 找到一个可能存在的正确的答案；
- 在尝试了所有可能的分步方法后宣告该问题没有答案。

在最坏的情况下，回溯法会导致一次复杂度为指数时间的计算。