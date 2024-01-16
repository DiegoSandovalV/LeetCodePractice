/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const allParenthesis = []

  allParenthesis = generateParenthesis(n)

  filteredParenthesis = allParenthesis.filter((parenthesis) => {
    return isValidParenthesis(parenthesis)
  })

  return filteredParenthesis
}

const generateParenthesis = (n) => {
  const numberOfParenthesis = n * 2

  const allParenthesis = []

  const openParenthesis = "("
  const closedParenthesis = ")"

  for (let i = 0; i < numberOfParenthesis; i++) {
    if (i % 2 === 0) {
      allParenthesis.push(openParenthesis)
    } else {
      allParenthesis.push(closedParenthesis)
    }
  }

  return allParenthesis.le
}
