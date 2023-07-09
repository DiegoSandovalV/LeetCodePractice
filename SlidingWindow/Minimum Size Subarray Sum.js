/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    let minSize = Infinity;
    let sum = 0;

    let start = 0;
    
    for(let i = 0; i < nums.length; i++){

        sum += nums[i]


        while(sum >= target){


            minSize = Math.min(minSize,i - start + 1)
            sum -= nums[start]
            start++
            
        }

    }

    return minSize == Infinity ? 0 : minSize

};

//test
console.log(minSubArrayLen(7,[2,3,1,2,4,3])) //2
console.log(minSubArrayLen(4,[1,4,4])) //1