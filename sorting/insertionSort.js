//compñexity: O(n^2)
//Average: O(n^2)
//Best: O(n)
//Worst: O(n^2)
//Space: O(1)

insertionSort = (arr) => {

    for(let i = 1; i  < arr.length; i++){

        let temp = arr[i]

        let j = i - 1

        while( j >= 0 && arr[j] > temp){
            arr[j+1] = arr[j]
            j--
        }

        arr[j+1] = temp

    }

    return arr
}

//test cases
console.log(insertionSort([1, 7, 3, 9, 5, 2, 4, 6, 8]))

