class Node{
    
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var invertTree = function(root) {
    if (!root) return [];

    let queue = [root];

    while(queue.length > 0){


        let curr = queue.shift();

        let newleft = curr.right;
        let newright = curr.left;

        curr.left = newleft;
        curr.right = newright;

        if(curr.left) queue.push(curr.left);
        if(curr.right) queue.push(curr.right);

    }

    return root;
};