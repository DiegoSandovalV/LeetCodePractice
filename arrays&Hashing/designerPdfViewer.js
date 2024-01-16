function designerPdfViewer(h, word) {
  // create a hash map of the alphabet

  const alphabetMap = new Map()
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  for (let i = 0; i < h.length; i++) {
    alphabetMap.set(alphabet[i], h[i])
  }

  let maxHeight = 0

  for (let i = 0; i < word.length; i++) {
    if (alphabetMap.get(word[i]) > maxHeight) {
      maxHeight = alphabetMap.get(word[i])
    }
  }

  return maxHeight * word.length
}
