const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}   


const numberConectedComponents = (graph) => {

    let count = 0

    let visited = new Set()

    for(let node in graph){
        if(explore(graph, node, visited)){
            count++
        }
    }

    return count

}

const explore = (graph, node, visited) => {

    if(visited.has(String(node))) return false

    visited.add(String((node)))

    let neighbors = graph[node]

    for(let neighbor of neighbors){
        explore(graph, neighbor, visited)
    }

    return true
}

console.log(numberConectedComponents(graph)) //2