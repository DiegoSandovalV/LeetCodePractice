/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    // let wordContainer = []

    // let word = ""

    // for(let i = 0; i < s.length; i++){

    //     while(s[i] !== " " && i < s.length){
    //         word += s[i]
    //         i++
    //     }

    //    if(word.length){
    //         wordContainer.push(word)
    //         word = ""
    //    }

    // }

    // return wordContainer.reverse().join(" ")

    let arr = s.split(" ")

    let reverseString = ""

    for(let i = arr.length -1; i >= 0; i--){
        if(arr[i] != " ") reverseString += arr[i] + " "
    }

    return reverseString.trim()

};

//Test case
let s = "the sky is blue" //outpút: blue is sky the
console.log(reverseWords(s))
