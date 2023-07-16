class Node{
    
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeIncludes = (root, target) => {

    if(!root) return false

    let stack = [];

    stack.push(root)

    while(stack.length > 0){

        let curr = stack.pop()

        if(curr === target){

            return true

        }else{

            if(curr.left) stack.push(curr.left)
            if(curr.right) stack.push(curr.right)

        }

    }

    return false



}


//Test case

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

//Search for e

// console.log(treeIncludes(a, e)) //true
// console.log(treeIncludes(a, "z")) //false

//recursive solution

const treeIncludesRecursive = (root, target) => {

    if(!root) return false

    if(root.val === target) return true

    return treeIncludesRecursive(root.left, target) || treeIncludesRecursive(root.right, target)


}

console.log(treeIncludesRecursive(a, "e")) //true
console.log(treeIncludesRecursive(a, "z")) //false