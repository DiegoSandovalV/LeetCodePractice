const BinarySearch = (arr, target) => {

    let lo = 0;

    let hi = arr.length

    while(lo <= hi){

        
        let middle = Math.floor((lo + hi) / 2)

        if(arr[middle] == target){
            return "In position " + middle + " of the array is: " + target + "\n"
        }else if(arr[middle] < target){
            lo = middle + 1
        }else{
            hi = middle - 1
        }


    }

    return "The target is not in the array"


};

//test
let arr = [1,2,3,4,5,6,7,8,9,10]
let target = 15

console.log(BinarySearch(arr, target))