const graph = {
    'a': ['b', 'c'],
    'b': ['d'],
    'c': ['e'],
    'd': ['f'],
    'e': [],
    'f': []
}


const hasPathDfs = (graph, src, dst) => {

    if(src === dst) return true

    let neighbors = graph[src]

    for(let neighbor of neighbors){
        if(hasPathDfs(graph, neighbor, dst)){
            return true
        }
    }

    return false

}

// console.log(hasPathDfs(graph, 'a', 'f')) //true
// console.log(hasPathDfs(graph, 'a', 'e')) //true

const hasPathBfs = (graph, src, dst) => {

    let queue = []
    queue.push(src)

    while(queue.length){

        let currNode = queue.shift()

        if(currNode === dst) return true

        let neighbors = graph[currNode]

        for(let neighbor of neighbors){
            queue.push(neighbor)
        }

    }
}

console.log(hasPathBfs(graph, 'a', 'f')) //true
console.log(hasPathBfs(graph, 'a', 'e')) //true