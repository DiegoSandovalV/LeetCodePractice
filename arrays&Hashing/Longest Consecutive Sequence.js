/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    if(nums.length === 0) return 0;

    nums.sort((a,b) => a - b)

    let maxCount = 0;
    let blockCount = 1;

    for(let i = 0; i < nums.length; i++){

        if(nums[i] === nums[i + 1]) continue;

        if(nums[i] + 1 === nums[i + 1]){
            blockCount++
        }else{
            maxCount = Math.max(maxCount, blockCount)
            blockCount = 1;
        }
    }

    return maxCount
};


//tests
// console.log(longestConsecutive([100,4,200,1,3,2])) //4
// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])) //9
// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1,9,10,11,12,13,14,15,16,17,18,19,20])) //21
//test with [1,2,0,1]
console.log(longestConsecutive([1,2,0,1])) //3