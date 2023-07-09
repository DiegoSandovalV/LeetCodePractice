var threeSum = function(nums) {
    
    const target = 0;

    let result = new Set();

    len = nums.length

    nums.sort((a,b) => (a-b))



    for(let i = 0; i < len; i++){

        if(i > 0 && nums[i] === nums[i-1]) continue;

        j = i + 1;
        k = len - 1;


        while(j < k){

            sum = nums[i] + nums[j] + nums[k]

            if(sum === target){
                
                result.add([nums[i], nums[j], nums[k]])


                while (j < k && nums[j] === nums[j+1]) j++;
                while (j < k && nums[k] === nums[k-1]) k--;

                j++
                k--


    
            }else if(sum < target){
                j++
            }else{
                k--
            }
        }


    }

    return result

};

//test
console.log(threeSum([-1,0,1,2,-1,-4])) // [[-1,-1,2],[-1,0,1]]
// console.log(threeSum([0,0,0,0])) // [[0,0,0]]
// console.log(threeSum([-2,0,1,1,2])) // [[-2,0,2],[-2,1,1]]