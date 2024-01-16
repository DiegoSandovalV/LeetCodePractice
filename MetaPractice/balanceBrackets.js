function isBalanced(s) {
  let stack = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      stack.push(s[i])
    } else {
      let top = stack.pop()
      if (s[i] === "}" && top !== "{") {
        return false
      } else if (s[i] === "]" && top !== "[") {
        return false
      } else if (s[i] === ")" && top !== "(") {
        return false
      }
    }
  }

  if (stack.length === 0) {
    return true
  } else {
    return false
  }
}

//test cases
console.log(isBalanced("{[()]}")) //true
console.log(isBalanced("{[(])}")) //false
console.log(isBalanced("{{[[(())]]}}")) //true
