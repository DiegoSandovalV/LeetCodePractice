/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// var checkInclusion = function (s1, s2) {
//   let s1Map = new Map()
//   let s1Len = s1.length

//   for (let i = 0; i < s1.length; i++) {
//     if (s1Map.has(s1[i])) {
//       s1Map.set(s1[i], s1Map.get(s1[i]) + 1)
//     } else {
//       s1Map.set(s1[i], 1)
//     }
//   }

//   let s2CharMap = new Map()

//   for (let i = 0; i < 26; i++) {
//     s2CharMap.set(String.fromCharCode(97 + i), 0)
//   }

//   l = 0
//   r = l + s1Len - 1

//   while (r < s2.length) {
//     let s2Map = new Map(s2CharMap)
//     for (let i = l; i <= r; i++) {
//       if (s2Map.has(s2[i])) {
//         s2Map.set(s2[i], s2Map.get(s2[i]) + 1)
//       }
//     }
//     if (compareMaps(s1Map, s2Map)) {
//       return true
//     }
//     l++
//     r++
//   }

//   return false
// }

// function compareMaps(map1, map2) {
//   for (let [key, val] of map1) {
//     if (val !== map2.get(key)) return false
//   }
//   return true
// }

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false

  s1CharMap = new Map()
  s2CharMap = new Map()

  for (let i = 0; i < 26; i++) {
    s1CharMap.set(String.fromCharCode(97 + i), 0)
    s2CharMap.set(String.fromCharCode(97 + i), 0)
  }

  for (let i = 0; i < s1.length; i++) {
    s1CharMap.set(s1[i], s1CharMap.get(s1[i]) + 1)
    s2CharMap.set(s2[i], s2CharMap.get(s2[i]) + 1)
  }

  matches = 0

  for (let i = 0; i < 26; i++) {
    if (
      s1CharMap.get(String.fromCharCode(97 + i)) ===
      s2CharMap.get(String.fromCharCode(97 + i))
    ) {
      matches++
    }
  }

  l = 0
  for (let r = s1.length; r < s2.length; r++) {
    if (matches === 26) {
      return true
    }

    let rChar = s2[r]
    let lChar = s2[l]
    s2CharMap.set(rChar, s2CharMap.get(rChar) + 1)

    if (s2CharMap.get(rChar) === s1CharMap.get(rChar)) {
      matches++
    } else if (s2CharMap.get(rChar) === s1CharMap.get(rChar) + 1) {
      matches--
    }

    s2CharMap.set(lChar, s2CharMap.get(lChar) - 1)

    if (s2CharMap.get(lChar) === s1CharMap.get(lChar)) {
      matches++
    } else if (s2CharMap.get(lChar) === s1CharMap.get(lChar) - 1) {
      matches--
    }

    l++
  }

  return matches === 26
}

//test
console.log(checkInclusion("ab", "eidbaooo")) //true
console.log(checkInclusion("ab", "eidboaoo")) //false
console.log(checkInclusion("adc", "dcda")) //true
