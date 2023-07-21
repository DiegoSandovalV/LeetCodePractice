/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    
    let prefixSums = new Map()

    prefixSums.set(0,1)

    let curSum = 0

    let result = 0

    for(let i =0; i < nums.length; i++){

        curSum += nums[i]

        let diff = curSum - k

        if(prefixSums.has(diff)){
            result += prefixSums.get(diff)
        }

        if(prefixSums.has(curSum)){
            prefixSums.set(curSum, prefixSums.get(curSum) + 1)
        }else{
            prefixSums.set(curSum,1)
        }


    }

    return result

};
