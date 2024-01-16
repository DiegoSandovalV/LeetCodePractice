class TreeNode {
  constructor(val, left, right) {
    this.val = val
    this.left = left || null
    this.right = right || null
  }
}

var amountOfTime = function (root, start) {
  if (!root) return -1

  if (root.val === start) return 0

  // convert binary tree into an adjacency list
  let adjacencyList = treeToAdjacencyList(root)

  // bfs through the adjacency list starting at start
  let level = 0

  let result = bfs(adjacencyList, start, level)

  return level
}

const treeToAdjacencyList = (root) => {
  if (!root) return []
  let adjacencyList = []
  let queue = [root]
  while (queue.length) {
    let node = queue.shift()
    if (node.left) {
      queue.push(node.left)
      adjacencyList.push([node.val, node.left.val])
    }
    if (node.right) {
      queue.push(node.right)
      adjacencyList.push([node.val, node.right.val])
    }
  }
  return adjacencyList
}

const bfs = (adjacencyList, start, level) => {
  let queue = [start]
  let visited = new Set()
  while (queue.length) {
    let node = queue.shift()
    if (!visited.has(node)) {
      visited.add(node)
      level++
      for (let i = 0; i < adjacencyList.length; i++) {
        if (adjacencyList[i][0] === node) {
          queue.push(adjacencyList[i][1])
        }
      }
    }
  }
  return level
}

// Example usage:
const root = new TreeNode(
  1,
  new TreeNode(5, null, new TreeNode(4)),
  new TreeNode(
    3,
    new TreeNode(10),
    new TreeNode(6, new TreeNode(9), new TreeNode(2))
  )
)

console.log(amountOfTime(root, 5)) // 1
console.log(amountOfTime(root, 9)) // 3
console.log(amountOfTime(root, 2)) // 3
