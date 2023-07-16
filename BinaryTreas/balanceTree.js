/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

  return dfs(root)[0];
    
};

const dfs = (root) => {

    if(root === null) return [true, 0];

    let left = dfs(root.left);
    let right = dfs(root.right);

    let balance = (left[0] && right[0]) && Math.abs(left[1] - right[1]) <= 1;

    return [balance, Math.max(left[1], right[1]) + 1];
}