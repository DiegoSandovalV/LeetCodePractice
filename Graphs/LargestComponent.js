//graph

const graph = {
    0: [8,1,5],
    1: [0],
    5: [0,8],
    8: [0,5],
    2: [3,4],
    3: [2,4],
    4: [3,2]
}

const largestComponent = (graph) => {

    let max = 0

    let visited = new Set()

    for(let node in graph){
        let size = explore(graph, node, visited)
        max = Math.max(max, size)
    }

    return max
}

const explore = (graph, node, visited) => {

    let stack = []

    stack.push(node)

    let count = 0

    while(stack.length){

        let currNode = stack.pop()

       if(visited.has(String(currNode))){
           continue
       }else{
            visited.add(String(currNode))
            count++
        }

        let neighbors = graph[currNode]

        for(let neighbor of neighbors){
            stack.push(neighbor)
        }

    }

    return count

}

console.log(largestComponent(graph))