//Graph

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []

}

//DFS

const dfs = (graph, sourceNode) => {

    let stack = []
    stack.push(sourceNode)

    let seen = []


    while(stack.length){
        let currNode = stack.pop()

        if(seen.includes(currNode)){
            continue
        }else{
            seen.push(currNode)
        }

        let neighbors = graph[currNode]

        for(let neighbor of neighbors){
            stack.push(neighbor)
        }
    }

    return seen
}

const dfsRecursive = (graph, sourceNode) => {
    let seen = []

    const dfsHelper = (graph, sourceNode) => {
        seen.push(sourceNode)
        
        let neighbors = graph[sourceNode]

        for(let neighbor of neighbors){
            if(!seen.includes(neighbor)){
                dfsHelper(graph, neighbor)
            }
        }
    }

    dfsHelper(graph, sourceNode)
    return seen
}

// console.log(dfs(graph, 'a'))
// console.log(dfsRecursive(graph, 'a'))

//BFS

const bfs = (graph, sourceNode) => {

    let queue = []

    queue.push(sourceNode)

    let seen = []

    while(queue.length){
        let currNode = queue.shift()

        if(seen.includes(currNode)){
            continue
        }else{
            seen.push(currNode)
        }

        let neighbors = graph[currNode]

        for(let neighbor of neighbors){
            queue.push(neighbor)
        }
    }

    return seen

}

console.log(bfs(graph, 'a'))