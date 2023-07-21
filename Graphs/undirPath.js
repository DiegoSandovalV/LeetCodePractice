const undirectedPath = (edges, src, dst) => {

    const graph = buildGraph(edges)

    return hasPathDfs(graph, src, dst, new Set())


}


const buildGraph = (edges) => {

    const graph = {}

    for(let edge of edges){
        const [a,b] = edge

        if(!(a in graph)) graph[a] = []
        if(!(b in graph)) graph[b] = []

        graph[a].push(b)
        graph[b].push(a)
    }

    return graph

}

const hasPathDfs = (graph, src, dst, visited) => {

    if(src === dst) return true

    let neighbors = graph[src]

    for(let neighbor of neighbors){

        if(visited.has(neighbor)) continue

        visited.add(neighbor)

        if(hasPathDfs(graph, neighbor, dst, visited)) return true

    }

    return false

}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

console.log(undirectedPath(edges, 'j', 'm')) //true
console.log(undirectedPath(edges, 'i', 'o')) //false