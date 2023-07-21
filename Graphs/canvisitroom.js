/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    
    let visited = new Set()

    const visitRooms = (room) => {

        if(visited.has(room)) return

        visited.add(room)

        for(let key of rooms[room]){
            visitRooms(key)
        }

    }

    visitRooms(0)

    return visited.size === rooms.length

};