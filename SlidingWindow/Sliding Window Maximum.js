/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var Deque = require("collections/deque");

var maxSlidingWindow = function(nums, k) {
    




    //create deque
    let deque = new Deque();

    //create result array
    let result = [];

    let start = 0;
    let end = 0;

    while(end < nums.length){

        //remove all elements smaller than current element
        while(deque.length > 0 && deque.peekBack() < nums[end]){
            deque.pop()
        }

        //add current element
        deque.push(nums[end])

        //if window is formed
        if(end - start + 1 == k){

            //add max element to result
            result.push(deque.peek())

            //remove the element from the window
            if(deque.peek() == nums[start]){
                deque.shift()
            }

            //slide the window
            start++
        }

        //slide the window
        end++


    }

    return result


};

//test
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3)) //[3,3,5,5,6,7]
console.log(maxSlidingWindow([1],1)) //[1]


// Solution 2 Time limit exceeded

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow2 = function(nums, k) {
    let max = -Infinity;
    let res = []

    let end = 0;

    let start = 0;

    while(end < k){
        max = Math.max(max, nums[end])
        end++
    }

    res.push(max)


    while(end < nums.length){
        if(nums[end] > max){
            max = nums[end]
            res.push(max)
            end++
            start++
        }else if(nums[start] == max){
            max = Math.max(...nums.slice(start + 1, end + 1))
            res.push(max)
            end++
            start++
        }else{
            res.push(max)
            end++
            start++
        }


    }

    return res
};