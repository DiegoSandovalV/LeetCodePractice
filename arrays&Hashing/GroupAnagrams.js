/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    groups = new Map()

    for(word of strs){
        let wordSorted = word.split('').sort().join('')
        console.log(wordSorted)
        
        if(groups.has(wordSorted)){
            groups.get(wordSorted).push(word)
        }else{
            groups.set(wordSorted, [word])
        }

    }
    
    console.log(groups)

    return Array.from(groups.values())


};

//tests
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) //[["bat"],["nat","tan"],["ate","eat","tea"]]
//console.log(groupAnagrams([""])) //[[""]]
//console.log(groupAnagrams(["a"])) //[["a"]]