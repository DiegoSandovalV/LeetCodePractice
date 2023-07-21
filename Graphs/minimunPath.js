const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]

const minimunPath = (edges, start, end) => {

    const graph = buildGraph(edges)

    let queue = [[start, 0]]

    while(queue.length){

        let [node, distance] = queue.shift()

        if(node === end) return distance

        let neighbors = graph[node]

        for(let neighbor of neighbors){
            queue.push([neighbor, distance + 1])
        }

    }

    return -1
    

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

console.log(minimunPath(edges, 'w', 'z')) //2
console.log(minimunPath(edges, 'y', 'x')) //1
