//Complexity: O(n^2)
//Average: O(n^2)
//Best: O(n)
//Worst: O(n^2)
//Space: O(1)

const bubbleSort = (arr)  => {

    for(let i = 0 ; i< arr.length; i++){
        for(let j = 0; j < arr.length - i -1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }

        }
    }
    
    return arr

} 

//test cases
console.log(bubbleSort([1, 7, 3, 9, 5, 2, 4, 6, 8]))