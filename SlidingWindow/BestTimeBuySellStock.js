/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let l = 0;
    let r = l + 1;

    let maxProfit = 0;

    while (r < prices.length) {
        if(prices[l] < prices[r]){
            let profit = prices[r] - prices[l] 
            maxProfit = Math.max(maxProfit,profit)
        }
        else{
            l = r
        }

        r++
        
    }

  return maxProfit  



};

//test
console.log(maxProfit([7,1,5,3,6,4])) //5
console.log(maxProfit([7,6,4,3,1])) //0
console.log(maxProfit([2,4,1])) //2
console.log(maxProfit([7,2,1,4,8]))//7