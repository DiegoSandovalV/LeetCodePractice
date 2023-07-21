/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    if(nums == null || nums.length < 2 || k == 0) return false;

    let seen = new Map()

    for(let i = 0; i < nums.length; i++){

        if(seen.has(nums[i])){

            let space = Math.abs(i - seen.get(nums[i]))

            if(space <= k){
                return true
            }

            seen.set(nums[i],i)

        }else{
            seen.set(nums[i],i)
        }


    }

    return false
    

};

nums = [1,2,3,1,2,3]
k = 2

console.log(containsNearbyDuplicate(nums,k)) //false