/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {

    let maxAvg = -Infinity; 
    let sum = 0;
    let currAvg = 0;

    //Create the window

    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        
        if(i >= k - 1){
            //Get the average
            currAvg = sum / k

             //Check if its the max average
            maxAvg = Math.max(maxAvg, currAvg)
            sum -= nums[i - (k - 1)]
        }

    }

    return maxAvg


};

//test
console.log(findMaxAverage([1,12,-5,-6,50,3], 4)) //12.75
console.log(findMaxAverage([5], 1)) //5