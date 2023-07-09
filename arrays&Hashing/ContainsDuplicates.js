/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    // nums.sort((a,b) => a-b)

    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] == nums[i+1]){
    //         return true
    //     }
    // }

    // return false


    numsSeen = new Set()

    for(num of nums){
        if(numsSeen.has(num)){
            return true
        }else{
            numsSeen.add(num)
        }
    }

    return false

};

//tests
console.log(containsDuplicate([1,2,3,1])) //true
console.log(containsDuplicate([1,2,3,4])) //false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) //true





