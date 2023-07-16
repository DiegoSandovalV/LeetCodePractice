class Node{
    
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Depth First Search

//Iterative Solution
const depthFirst = (root) => {

    if(!root) return [];

    const stack =[root];

    let seen = [];

    while(stack.length > 0){
        let current = stack.pop();

        seen.push(current.val);

        
        if(current.right){
            stack.push(current.right);
        }
        if(current.left){
            stack.push(current.left);
        }

        
    }


    return seen;
};

//Recursive Solution

const depthFirstRecursive = (root) => {
    if(!root) return [];

    const left = depthFirstRecursive(root.left);
    const right = depthFirstRecursive(root.right);

    return [].concat([root.val], left, right);


}

//Test Cases
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

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

console.log(depthFirst(a)) // a, b, d, e, c, f
console.log(depthFirstRecursive(a)) // a, b, d, e, c, f

