// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.


const isSubsequence = (s, t) => {

    // for(char of t){
      
    //     if(!s.includes(char)){
    //         t = t.replace(char,'')
    //         console.log(t)
    //     }
    // }

    // if(s == t){
    //     return true
    // }else{
    //     return false
    // }


    if(s.length > t.length){
        return false
    }

    let accum = 0;

    for(let i = 0; i < t.length; i++){
        if(s[accum] == t[i]){
            accum++
        }
    }

    if(accum == s.length){
        return true
    }else{
        return false
    }
    



};


//Tests

console.log(isSubsequence("ab","baab")) //true
// console.log(isSubsequence("axc","ahbgdc")) //false
// console.log(isSubsequence("b","c")) //false
// console.log(isSubsequence("","")) //true
