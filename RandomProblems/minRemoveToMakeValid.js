/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  stack = []
  removeArr = []

  // Transverse the string
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(i)
    } else if (s[i] == ")") {
      if (stack.length) {
        stack.pop()
      } else {
        removeArr.push(i)
      }
    }
  }

  // Add the remaining open brackets to the remove array
  while (stack.length) {
    removeArr.push(stack.pop())
  }

  // Remove the characters from the string
  let result = ""
  for (let i = 0; i < s.length; i++) {
    if (!removeArr.includes(i)) {
      result += s[i]
    }
  }

  return result
}

// test cases
console.log(minRemoveToMakeValid("lee(t(c)o)de)")) // lee(t(c)o)de
console.log(minRemoveToMakeValid("a)b(c)d")) // ab(c)d
