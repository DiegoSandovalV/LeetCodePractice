

var numIslands = function(grid) {

    const visited = new Set()

    let count = 0

    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            if(grid[r][c] === '1'){
                if(explore(grid, r, c, visited)) count++
            }
        }
    }

    return count

}



const explore = (grid, r, c, visited) => {

    if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) return false

    if(grid[r][c] === '0') return false

    const pos = r + ',' + c

    if(visited.has(pos)) return false

    visited.add(pos)

    explore(grid, r - 1, c, visited)
    explore(grid, r + 1, c, visited)
    explore(grid, r, c - 1, visited)
    explore(grid, r, c + 1, visited)

    return true

}

