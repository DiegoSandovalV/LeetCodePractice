/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    if(flowerbed.length == 1 && flowerbed[0] == 0 && n == 1) return true

    let ptr = 0

    while(ptr <= flowerbed.length-1 && n > 0){

        console.log(ptr +"floer: " + flowerbed[ptr])

        if(flowerbed[ptr] == 1){
            ptr+=2
        }

        else if(flowerbed[ptr] == 0 && flowerbed[ptr + 1] == 0 ){
            n--
            ptr+=2
        }

        else if(ptr == flowerbed.length-1 && flowerbed[ptr] == 0){
            n--
            ptr++
        }

        else{
            ptr++
        }

    }

    return n == 0
 

};

//tests
//[0,0,1,0,1]
// console.log(canPlaceFlowers([0,0,1,0,0], 1)) //true
console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2))