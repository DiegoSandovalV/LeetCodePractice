const quickSort = (arr) => {

    if(arr.length <= 1) return arr

    let left = []
    let rigth = []

    let pivot = Math.floor(arr.length / 2)

    for(let i = 0; i < arr.length; i++){

        if(i === pivot) continue

        if(arr[i] < arr[pivot]){
            left.push(arr[i])
        }else{
            rigth.push(arr[i])
        }
    }

    return [].concat(quickSort(left), arr[pivot], quickSort(rigth))

}

//test cases
console.log(quickSort([1, 7, 3, 9, 5, 2, 4, 6, 8]))
