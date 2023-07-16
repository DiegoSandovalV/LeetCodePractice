
//   Definition for a binary tree node.
  function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // DFS
    let stack = [];
    stack.push(root);
    let foundSubtree = false;

    while (stack.length) {
        let curr = stack.pop();

        if (curr.val === subRoot.val) {
            foundSubtree = isSameTree(curr, subRoot);
        }

        if(foundSubtree) return true;

        if (curr.right) stack.push(curr.right);
        if (curr.left) stack.push(curr.left);
    }

    return foundSubtree;
};

const isSameTree = (firstRoot, secondRoot) => {
    if (firstRoot === null && secondRoot === null) return true;
    if (firstRoot === null || secondRoot === null || firstRoot.val !== secondRoot.val) {
        return false;
    }
    return (
        isSameTree(firstRoot.left, secondRoot.left) && isSameTree(firstRoot.right, secondRoot.right)
    );
};


//test cases
//root = [1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,2]    
//subroot = [1,null,1,null,1,null,1,null,1,null,1,2]


//create the tree

