/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    
    let freq = new Map()

    let l = 0;
    

    let maxFreq = 0;

    for(let r = 0;r < s.length; r++){


        if(freq.has(s[r])){
            freq.set(s[r], freq.get(s[r]) + 1)
        }else{
            freq.set(s[r], 1)
        }

        let windowSize = (r - l) + 1;

        while((windowSize - maxMapFreq(freq)) > k){
            freq.set(s[l], freq.get(s[l]) - 1)
            l++
            windowSize = (r - l) + 1;
        }



        maxFreq = Math.max(maxFreq, windowSize)



    }

    return maxFreq

};

const maxMapFreq = (map) => {
    return Math.max(...map.values())
}

//test
console.log(characterReplacement("AABABBA",1)) //4
console.log(characterReplacement("AABABBA",1)) //4