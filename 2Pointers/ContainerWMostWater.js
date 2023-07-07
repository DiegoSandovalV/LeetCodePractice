// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  
    let lo = 0;
    let hi = height.length - 1;

    result = 0
    let area;

    while(lo < hi){

        area = Math.min(height[lo], height[hi]) * (hi - lo)

        result = Math.max(result,area)

        if(height[lo] < height[hi]){
            lo++
        }else{
            hi--
        }


    }

    return result


};

//test
console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49
console.log(maxArea([1,1])) // 1
console.log(maxArea([4,3,2,1,4])) // 16
console.log(maxArea([1,2,1])) // 2
