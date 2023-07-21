/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    k = k % nums.length
    
    let left = 0
    let rigth = nums.length - 1

    while(left < rigth){
        [nums[left],nums[rigth]] = [nums[rigth],nums[left]]
        left++
        rigth--
   }

   left = 0
   rigth = k -1

   console.log(nums)

   while(left < rigth){
        [nums[left],nums[rigth]] = [nums[rigth],nums[left]]
        left++
        rigth--
   }

   console.log(nums)


   left = k
   rigth = nums.length - 1

   while(left < rigth){
    [nums[left],nums[rigth]] = [nums[rigth],nums[left]]
    left++
        rigth--
    }


    return nums


};

console.log(rotate([-1,-100,3,99],2))