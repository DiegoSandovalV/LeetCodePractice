/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    
    let max = -1

    for(let i = arr.length - 1; i >= 0; i--){

        let temp = arr[i]

        arr[i] = max

        max = Math.max(max,temp)

    }

    return arr


};

console.log(replaceElements([17,18,5,4,6,1]))