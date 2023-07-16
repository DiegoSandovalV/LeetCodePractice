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
 * @return {number}
 */
var maxPathSum = function(root) {

    let res = -Infinity

    res.push(root.val)

    const dfsForMaxPathSum = (root) => {

        if(!root) return 0

        let left = Math.max(0, dfsForMaxPathSum(root.left))
        let right = Math.max(0, dfsForMaxPathSum(root.right))

        res[0] = Math.max(res[0], left + right + root.val)

        return Math.max(left, right) + root.val

    }

    dfsForMaxPathSum(root)

    return res[0]
    
    
};