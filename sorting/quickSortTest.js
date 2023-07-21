//nums = [1, 5, 3 ,2, 6 ,4]

//Pivot = 3
//Ledt array = [1,5]
//Right array = [5,6,4]

// [1,5]
//pivot 1
//Left array []
//Right array = 5

//arr.length <= 1 return []

//Contcat. [].left,pivot,rigth

const quickSort = (arr) =>{

    if(arr.length <= 1) return arr

    let left = []
    let right = []

    let pivot = Math.floor(arr.length/2)

    for(let i = 0; i < arr.length; i++){

        if(i == pivot) continue

        if(arr[i] < arr[pivot]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }

    }

    return [].concat(quickSort(left),arr[pivot],quickSort(right))


}

//test cases
console.log(quickSort([1, 7, 3, 9, 5, 2, 4, 6, 8]))
