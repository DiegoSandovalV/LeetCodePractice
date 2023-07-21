/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let mapValues = new Map()


    for(let i = 0; i < nums.length; i++ ){

        let diff = target - nums[i]

        if(mapValues.has(diff)){
            if(mapValues.get(diff) != i){
                return [mapValues.get(diff),i]
            }
            
        }else{
            mapValues.set(nums[i],i)
        }

    }


};