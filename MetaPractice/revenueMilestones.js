function getMilestoneDays(revenues, milestones) {
  // Prefix sum
  let prefixSum = [0] 

  for (let i = 1; i <= revenues.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + revenues[i - 1] 
  }

  // Search for day
  const result = []

  for (const m of milestones) {
    const day = binarySearch(m, prefixSum)
    result.push(day)
  }

  return result
}

function binarySearch(target, arr) {
  let lo = 0
  let hi = arr.length - 1 // Adjusted the upper bound index

  while (lo <= hi) {
    let middle = Math.floor((lo + hi) / 2)

    if (arr[middle] === target) {
      return middle
    } else if (arr[middle] < target) {
      lo = middle + 1
    } else {
      hi = middle - 1
    }
  }

  return lo 
}

// Test
console.log(getMilestoneDays([100, 200, 300, 400, 500], [300, 800, 1000, 1400])) // [2, 4, 4, 5]
console.log(
  getMilestoneDays(
    [700, 800, 600, 400, 600, 700],
    [3100, 2200, 800, 2100, 1000]
  )
) // [5, 4, 2, 3, 2]
