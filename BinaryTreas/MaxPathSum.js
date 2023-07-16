class Node{
    
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const maxPathSum = (root) => {

    if(!root) return -Infinity

    if(!root.left && !root.right) return root.val

    const max = Math.max(maxPathSum(root.left), maxPathSum(root.right))

    return max + root.val
}

//Test Cases
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//Representing a Binary Tree
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(maxPathSum(a)); //16