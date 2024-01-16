/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false

  let firstCharMap = new Map()

  for (let i = 0; i < s.length; i++) {
    if (firstCharMap.has(s[i])) {
      firstCharMap.set(s[i], firstCharMap.get(s[i]) + 1)
    } else {
      firstCharMap.set(s[i], 1)
    }
  }

  let secondCharMap = new Map()
  for (let i = 0; i < t.length; i++) {
    if (secondCharMap.has(t[i])) {
      secondCharMap.set(t[i], secondCharMap.get(t[i]) + 1)
    } else {
      secondCharMap.set(t[i], 1)
    }
  }

  let firstCharMapValues = [...firstCharMap.values()]
  let secondCharMapValues = [...secondCharMap.values()]

  firstCharMapValues.sort()
  secondCharMapValues.sort()

  for (let i = 0; i < firstCharMapValues.length; i++) {
    if (firstCharMapValues[i] !== secondCharMapValues[i]) {
      return false
    }
  }

  return true
}

// test
console.log(isIsomorphic('egg', 'add')) // true
console.log(isIsomorphic("foo", "bar")) // false
