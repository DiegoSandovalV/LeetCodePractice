/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    //Searching for the row

    let l = 0;
    let r = matrix.length-1;

    
    let row = -1;

    while(l <= r && row === -1){

        let mid = Math.floor((l+r)/2);

        if(matrix[mid][matrix[mid].length-1] === target) return true;

        if(matrix[mid][matrix[mid].length-1] >= target && matrix[mid][0] <= target){
            row = mid;
        }


        if(matrix[mid][matrix[mid].length-1] > target){
            r = mid - 1;
        }else{
            l = mid + 1;
        }

     


    }

   

    if(row === -1) return false;
    

    //Second binary search for the element

    l = 0;
    r = matrix[row].length-1;

    

  
    while(l < r){

        mid = Math.floor((l+r)/2);

        if(matrix[row][mid] === target) return true;

        if(matrix[row][mid] > target){
            r = mid - 1;
        }else{
            l = mid + 1;
        }

    

    }

    return false;

};

//test cases
//matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); //false

//[[1,3]], 3

console.log(searchMatrix([[1,3]], 3));