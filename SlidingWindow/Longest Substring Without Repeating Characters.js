/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) return 0
  if (s.length == 1) return 1

  let container = new Map()
  let maxAccum = 0
  let accum = 0

  let start = 0

  for (let end = 0; end < s.length; end++) {
    while (container.has(s[end])) {
      container.delete(s[start])
      start++
    }

    container.set(s[end])

    accum = end - start + 1
    maxAccum = Math.max(maxAccum, accum)
  }

  return maxAccum
}

//test
// console.log(lengthOfLongestSubstring("abcabcbb")) //3
// console.log(lengthOfLongestSubstring("bbbbb")) //1
console.log(lengthOfLongestSubstring("pwwkew")) //3

//"au"
// console.log(lengthOfLongestSubstring("au")) //2
