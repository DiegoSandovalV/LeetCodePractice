/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    let lPtr = 0;

    let rPtr = height.length - 1

    let lMax = height[lPtr]

    let rMax = height[rPtr]
    
    let result = 0

    while(lPtr < rPtr){

        if(lMax <= rMax){

            lPtr++
            lMax = Math.max(lMax, height[lPtr])
            result += lMax - height[lPtr]

        }else{

            rPtr--
            rMax=Math.max(rMax,height[rPtr])
            result += rMax - height[rPtr]

        }

    }


    return result

    
};

//tests
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) //6
console.log(trap([4,2,0,3,2,5])) //9
console.log(trap([4,2,3])) //1