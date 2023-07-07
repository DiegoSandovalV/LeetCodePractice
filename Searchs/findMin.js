/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    //Easy solution jaja
    //return Math.min(...nums)

    let lo = 0;
    let hi = nums.length - 1;

    min = nums[0];

    



    while(lo <= hi){

        let middle = Math.floor((lo + hi) / 2);
        
        if(nums[middle] < min){
            min = nums[middle]
            hi = middle - 1;
        }else{
            lo = middle + 1;
        }


    }

    return min;

};

//test
let nums = [4,5,6,7,0,1,2]
console.log(findMin(nums))
