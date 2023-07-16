class Node{
    
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const sumTree = (root) => {

    if(!root) return [];

    const queue =[root];

    let sum = 0;

    while(queue.length > 0){
        let curr = queue.shift();

        sum+=curr.val;

        if ( curr.left ) queue.push(curr.left);
        if ( curr.right ) queue.push(curr.right);


    }

    return sum;

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

console.log(sumTree(a)); //21

//Recursive Solution

const sumTreeRecursive = (root) => {

    if(!root) return 0;

    if(!root.left && !root.right) return root.val

    return root.val + sumTreeRecursive(root.left) + sumTreeRecursive(root.right)


}

console.log(sumTreeRecursive(a)); //21