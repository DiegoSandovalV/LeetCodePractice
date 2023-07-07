/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {

    let stack = []
    let result = ""

    for(char of s){


        if(stack.length && char == "*"){
            stack.pop()
        }else{
            stack.push(char)
        }

    }


    while(stack.length){
        result = stack.pop() + result
    }

    return result
};

//test
//input: "leet**cod*e"
//expected: "lecode"
console.log(removeStars("leet**cod*e"))