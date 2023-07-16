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
var diameterOfBinaryTree = function(root) {

    let res = [0];


    const dfs = (root) => {

        if(root === null) return -1;
        
        let left = dfs(root.left);
        let right = dfs(root.right);
    
        let diameter = left + right + 2;
    
        res = Math.max(res, diameter);
    
        return Math.max(left, right) + 1;
    
    }

    dfs(root);

    return res;

};

