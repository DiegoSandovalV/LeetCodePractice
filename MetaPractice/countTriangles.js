function countDistinctTriangles(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].sort()
  }

  let frequencyMap = {}

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i].join("")
    if (frequencyMap[key]) {
      frequencyMap[key]++
    } else {
      frequencyMap[key] = 1
    }
  }

  return Object.keys(frequencyMap).length
}

//test cases
console.log(countDistinctTriangles([[7, 6, 5], [5, 7, 6], [8, 2, 9], [2, 3, 4], [2, 4, 3]])) //3
console.log(countDistinctTriangles([[3, 4, 5], [8, 8, 9], [7, 7, 7]])) //3
console.log(countDistinctTriangles([[3, 4, 5], [8, 8, 9], [7, 7, 7], [3, 4, 5]])) //3
