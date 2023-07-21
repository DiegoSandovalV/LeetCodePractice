//grid example:

// const grid = [
//     ['0','1','0','0','0'],
//     ['0','1','0','0','0'],
//     ['0','0','0','1','0'],
//     ['0','0','1','1','0'],
//     ['1','0','0','1','1'],
//     ['1','1','0','0','0'],
// ]



var numIslands = function(grid) {

    const visited = new Set()

    let max = 0

    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
           let size = explore(grid, r, c, visited)
           if(size > 0) max = Math.max(max, size)
        }
    }

    return max

}



const explore = (grid, r, c, visited) => {

    if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return 0

    if(grid[r][c] === 0) return 0

   

    const pos = r + ',' + c

    if(visited.has(pos)) return 0

    

    visited.add(pos)

    let size = 1

    size += explore(grid, r - 1, c, visited)
    size += explore(grid, r + 1, c, visited)
    size += explore(grid, r, c - 1, visited)
    size += explore(grid, r, c + 1, visited)

    return size

}

grid = [[0,0,0,0,0,0,0,0]]

console.log(numIslands(grid)) //0