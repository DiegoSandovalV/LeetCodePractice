/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {

    //Set the vowels to a map
    const vowels = new Map(
        [
            ['a', true],
            ['e', true],
            ['i', true],
            ['o', true],
            ['u', true]
        ]
    )

    let maxVowels = 0;
    let currVowels = 0;

    //Create the window

    for(let i = 0; i < s.length; i++){

        //Count the vowels in window

        if(vowels.get(s[i])){
            currVowels++
        }


        if(i >= k - 1){
            //Check for max vowels
            maxVowels = Math.max(maxVowels, currVowels)
        
            //Resize the window
            if(vowels.get(s[i - (k - 1)])){
                currVowels--
            }
        
        }

    }

    return maxVowels
    
    
};