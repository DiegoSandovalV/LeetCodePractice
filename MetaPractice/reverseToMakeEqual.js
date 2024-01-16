// Example
// A = [1, 2, 3, 4]
// B = [1, 4, 3, 2]
// output = true

function areTheyEqual(array_a, array_b) {
  let map = new Map()

  for (let i = 0; i < array_a.length; i++) {
    if (array_a[i] in map) {
      map[array_a[i]] += 1
    } else {
      map[array_a[i]] = 1
    }

    if (array_b[i] in map) {
      map[array_b[i]] -= 1
    } else {
      map[array_b[i]] = -1
    }
  }

  for (let key in map) {
    if (map[key] !== 0) {
      return false
    }
  }

  return true
}

console.log(areTheyEqual([1, 2, 3, 4], [1, 4, 3, 2]))
console.log(areTheyEqual([1, 2, 3, 4], [1, 4, 3, 3]))
