/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    let maxCandy = Math.max(...candies)

    result = []

    for(let i = 0; i < candies.length; i++){
        if((candies[i] + extraCandies) >= maxCandy){
            result.push(true)
        }else{
            result.push(false)
        }
    }

    return result


};

//tests
console.log(kidsWithCandies([2,3,5,1,3], 3)) //[true,true,true,false,true]
//console.log(kidsWithCandies([4,2,1,1,2], 1)) //[true,false,false,false,false]