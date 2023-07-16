class Node{
    
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


const breadthFirst = (root) => {

    if(!root) return [];

    const queue =[root];

    let seen = [];

    while(queue.length > 0){
        let curr = queue.shift();

        seen.push(curr.val);

        if ( curr.left ) queue.push(curr.left);
        if ( curr.right ) queue.push(curr.right);


    }

    return seen;

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

console.log(breadthFirst(a)); //["a", "b", "c", "d", "e", "f"]