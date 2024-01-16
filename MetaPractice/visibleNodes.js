// Add any extra import statements you may need here

// Definition for a binary tree node
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

// Add any helper functions you may need here

function depth(root, currDepth) {
  if (!root) return currDepth

  currDepth++

  return Math.max(depth(root.left, currDepth), depth(root.right, currDepth))
}

function visibleNodes(root) {
  return depth(root, 0)
}

// these are test cases
const root = new TreeNode(8)
root.left = new TreeNode(3)
root.right = new TreeNode(10)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(6)
root.right.right = new TreeNode(14)
root.left.right.left = new TreeNode(4)
root.left.right.right = new TreeNode(7)
root.right.right.left = new TreeNode(13)

console.log(visibleNodes(root)) //4
