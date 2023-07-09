/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    if(flowerbed.length == 1 && flowerbed[0] == 0 && n == 1) return true

    
    for(let i = 0; i < flowerbed.length; i++){

        if(n > 0){
            if(flowerbed[i] == 1) continue

        if(i == 0 && flowerbed[i+1] == 0){
            console.log('here')
            flowerbed[i] = 1
            n--
        }else if(i == flowerbed.length - 1 && flowerbed[i-1] == 0){
            flowerbed[i] = 1
            n--
        }

        else if(flowerbed[i-1] == 0 && flowerbed[i+1] == 0){
            flowerbed[i] = 1
            n--
        }
        }

    }

   

    if(n == 0) return true

    return false

};

//tests
//[0,0,1,0,1]
console.log(canPlaceFlowers([0,0,1,0,0], 1)) //true