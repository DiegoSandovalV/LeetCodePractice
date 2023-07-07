/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

const guess = (num) => {
    let pick = 6

    if(num == pick){
        return 0
    }else if(num > pick){
        return -1
    }else{
        return 1
    }

}

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    

      
    let lo = 1;
    let hi = n;

    while(lo <= hi){
        let mid = Math.trunc((lo + hi) /2)

    

        let res = guess(mid)


        if(res == 0){
            return mid
        }else if(res == 1){
            lo = mid + 1
        }else{
            hi = mid - 1;
        }

    }

};

//test
let n = 10
console.log(guessNumber(n))
