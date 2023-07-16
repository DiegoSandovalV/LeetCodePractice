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
 * @return {number[][]}
 */
var levelOrder = function(root) {

    let res = [];

    const dfs = (root, index) => {

        if(root == null) return;
        
        if(!res[index]) res.push([]);

        res[index].push(root.val);

        if(root.right) return dfs(root.right, index + 1);
        if(root.left) return dfs(root.left, index + 1);
    
    }

    dfs(root, 0);

    return res;
    
};

