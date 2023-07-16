/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let iceCream = 0;

    costs.sort((a,b) => a-b)


    for(let i = 0; i < costs.length ; i++){

        if(coins >= costs[i]){
            iceCream++
            coins -= costs[i]
        }
    }

    return iceCream
    

};

//test
console.log(maxIceCream([1,3,2,4,1],7)) //4
console.log(maxIceCream([10,6,8,7,7,8],5)) //0