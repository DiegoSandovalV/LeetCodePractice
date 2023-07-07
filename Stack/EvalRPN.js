/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []

    for(let i = 0; i < tokens.length; i++){

        

        if(tokens[i] == "+"){
            let num1 = stack.pop()
            let num2 = stack.pop()
            stack.push(num1 + num2)

        }else if(tokens[i] == "-"){
            let num1 = stack.pop()
            let num2 = stack.pop()
            stack.push(num2 - num1)
        }else if(tokens[i] == "*"){
            let num1 = stack.pop()
            let num2 = stack.pop()
            stack.push(num1 * num2)
        }else if(tokens[i] == "/"){
            let num1 = stack.pop()
            let num2 = stack.pop()
            stack.push(Math.trunc(num2 / num1))
        }else{
            tokens[i] = parseInt(tokens[i])
            stack.push(tokens[i])
        }


    }

    return stack[0]

};


//test
//input: ["2","1","+","3","*"]
//output: 9
//expected: 9
console.log(evalRPN(["2","1","+","3","*"]))

