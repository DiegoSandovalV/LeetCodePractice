/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
 
    let oldToNew = new Map()

    const clone = (node) => {

        if(oldToNew.has(node)) return oldToNew.get(node)

        let newNode = new Node(node.val)
        oldToNew.set(node, newNode)

        let neighbors = node.neighbors

        for(let neighbor in neighbors){
            newNode.neighbors.push(clone(neighbor))
        }

        return newNode

    }

    clone(node)

    return oldToNew.get(node)

};