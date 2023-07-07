/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let res = []


    let preCount = 1;

    for(let i = 0; i < nums.length; i++){
        console.log(preCount)
        res[i] = preCount
        preCount *= nums[i]
        
    }

    let postCount = 1;

    for(let i = nums.length - 1 ; i >= 0; i--){
       
        res[i] *= postCount
        postCount *= nums[i]
    }

    return res
    
};

//tests
//console.log(productExceptSelf([1,2,3,4])) //[24,12,8,6]
console.log(productExceptSelf([-1,-1])) //[1,1]
//console.log(productExceptSelf([1,2])) //[2,1]
