/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    
    let max = 0;
    let accum = 0;

    let l = 0;

    for(let r = 0; r < nums.length; r++){

        if(nums[r] === 0){
            accum++
        }

        let windowSize = (r - l) + 1;

        while(accum > k){
            
            if(nums[l] === 0){
                accum--
            }

            l++

            windowSize = (r - l) + 1;
        }

        max = Math.max(max, windowSize)

    }

    return max
};

//test
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2)) //6
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],0)) //4
console.log(longestOnes([0,0,0,1],4)) //4