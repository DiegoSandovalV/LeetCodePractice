function numberOfWays(arr, k) {
  let count = 0
  let map = new Map()

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in map) {
      map[arr[i]] += 1
    } else {
      map[arr[i]] = 1
    }

    let diff = k - arr[i]

    if (diff in map) {
      count += map[diff]
    }

    if (diff === arr[i]) {
      count--
    }
  }

  return count
}

console.log(numberOfWays([1, 2, 3, 4, 3], 6)) // 2
console.log(numberOfWays([1, 5, 3, 3, 3], 6)) // 4
console.log(numberOfWays([1, 1, 1, 1, 1], 2)) // 10
