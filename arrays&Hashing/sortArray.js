/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const sortedNums = mergeSort(nums)
    return sortedNums
};

const mergeSort = (array) => {

    if (array.length <= 1) return array

    let len = array.length

    let mid = Math.floor(len / 2)

    let left = array.slice(0,mid)
    let rigth = array.slice(mid,len)

    return merge(mergeSort(left), mergeSort(rigth))

}

const merge = (left,rigth) => {

    let result = []

    while(left.length && rigth.length){

        if(left[0] < rigth[0]){
            result.push(left.shift())
        }else{
            result.push(rigth.shift())
        }

    }

    return [].concat(result,left,rigth)

}

//test cases
console.log(sortArray([5,2,3,1]))
