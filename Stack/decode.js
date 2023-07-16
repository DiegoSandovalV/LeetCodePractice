/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    

    let stack = [];

    for(let i = 0; i < s.length; i++) {

        if(s[i] != "]"){
            stack.push(s[i]);
        }else{

            let substr = "";

            while(stack[stack.length - 1] != "["){
                substr = stack.pop() + substr;
            }

            stack.pop();

            let num = "";

            while(stack.length && +stack[stack.length-1] != NaN){
                num = stack.pop() + num;
            }

            stack.push(substr.repeat(num));

        }

    }

    return stack.join("");

};