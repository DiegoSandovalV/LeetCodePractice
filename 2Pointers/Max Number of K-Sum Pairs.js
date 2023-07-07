/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    
    let lo = 0;

    let hi = nums.length - 1;

    result = 0;

    nums.sort((a,b) => a - b)

    while(lo < hi){


        if(nums[lo] + nums[hi] === k){

            result++

            lo++
            hi--

            

        } else if(nums[lo] + nums[hi] < k){
            lo++
        }else{
            hi--
        }

       

    }


    return result

};

//test
//console.log(maxOperations([1,2,3,4],5)) // 2
//console.log(maxOperations([3,1,3,4,3],6)) // 1
// console.log(maxOperations([2,2,2,3,1,1,4,1],4)) // 2
console.log(maxOperations([1,1,1,2,2,2,3,3,3,4,4,4],3)) // 4