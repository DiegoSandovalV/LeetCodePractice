
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    let nodes = dfs(root);

    nodes.sort((a,b) => a-b);

    return nodes[k-1]

};


const dfs = (root) => {


    let stack = [root];
    let seen = [];

    while(stack.length){
        let curr = stack.pop();

        seen.push(curr.val);

        if(curr.left) stack.push(curr.left);
        if(curr.right) stack.push(curr.right);


    }

    return seen;

}