/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    s=s.trim()

    let rPtr = s.length - 1

    let len = 0;

    while(s[rPtr] != " " && rPtr >= 0){
        len++
        rPtr--
    }

    return len


};