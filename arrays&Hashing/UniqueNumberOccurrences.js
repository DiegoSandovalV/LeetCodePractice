/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
    let freq = new Map()

    for(let i = 0; i < arr.length ; i++){

        if(freq.has(arr[i])){
            freq.set(arr[i],freq.get(arr[i]) + 1)
        }else{
            freq.set(arr[i],1)
        }

    }
   

    let keyArr = Array.from(freq.values())
    
    keyArr.sort((a,b) => a-b)
    

    for(let i = 0; i<keyArr.length; i++){
        if(keyArr[i] == keyArr[i+1]){
            return false
        }
    }

    return true

};

//test
//[1,2]

//expected
//false

console.log(uniqueOccurrences([1,2]))