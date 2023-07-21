//Complexity: O(nlogn)
//Average: O(nlogn)
//Best: O(nlogn)
//Worst: O(nlogn)
//Space: O(n)

const mergeSort = (arr) => {

    if(arr.length <= 1) return arr

    let len = arr.length

    let mid = Math.floor(len / 2)

    let left = arr.slice(0, mid)
    let right = arr.slice(mid, len)

    return merge(mergeSort(left), mergeSort(right))


}

const merge = (left, right) => {

    let result = []

    while(left.length && right.length){

        if(left[0] < right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }

    return result.concat(left, right)

}

//test cases
console.log(mergeSort([1, 7, 3, 9, 5, 2, 4, 6, 8]))