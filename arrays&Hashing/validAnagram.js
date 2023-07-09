/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length != t.length){
        return false
    }

    s = s.split('').sort().join('')
    t = t.split('').sort().join('')

    if(s == t){
        return true
    }else{
        return false
    }


};

//tests
console.log(isAnagram("anagram", "nagaram")) //true
console.log(isAnagram("rat", "car")) //false
console.log(isAnagram("a", "ab")) //false