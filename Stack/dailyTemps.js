/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    let stack = []
    let result = new Array(temperatures.length).fill(0)

    

    for(let day = 0; day < temperatures.length; day++){
        
        while(stack.length && temperatures[day] > temperatures[stack[stack.length - 1]]){
            let index = stack.pop()
            result[index] = day - index
        }

         stack.push(day)
        
    }

    return result


};
//test
//input: [73,74,75,71,69,72,76,73]
//expected: [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
