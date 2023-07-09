var twoSum = function(numbers, target) {
    
  ptr1 = 0;
  ptr2 = numbers.length - 1;

  while(ptr1 < ptr2){
    if(numbers[ptr1] + numbers[ptr2] == target){
      return [ptr1 + 1, ptr2 + 1]
    }else if(numbers[ptr1] + numbers[ptr2] > target){
      ptr2--
    }else{
      ptr1++
    }
  }

};



//test
console.log(twoSum([1,2,3,4,4,9,56,90],8)) // [4,5]
// console.log(twoSum([2,3,4], 6)) // [1,3]
// console.log(twoSum([-1,0], -1)) // [1,2]