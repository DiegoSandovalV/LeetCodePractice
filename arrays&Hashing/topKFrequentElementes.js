/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let freq = new Map()

    for(num of nums){

        

        if(freq.has(num)){
          
            freq.set(num, freq.get(num)+1)

         
        }else{
            freq.set(num,1)
        }

    }


    

    return [...freq.keys()].sort((a, b) => freq.get(b) - freq.get(a)).slice(0, k)
 

};

//tests
console.log(topKFrequent([1,1,1,2,2,3],2)) //[1,2]
// console.log(topKFrequent([1],1)) //[1]
// console.log(topKFrequent([1,2],2)) //[1,2]

//test with negative numbers
console.log(topKFrequent([-1,-1],1)) //[-1]