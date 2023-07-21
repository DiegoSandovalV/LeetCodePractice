/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a,b) => {
        aStr = a.toString()
        bStr = b.toString()

        if(parseInt(aStr + bStr) > parseInt(bStr + aStr)){
            return -1
        }else{
            return 1
        }
    })


    return nums.join("")

};