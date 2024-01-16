// Example 1
// input = Zebra-493?
// rotationFactor = 3
// output = Cheud-726?
// Example 2
// input = abcdefghijklmNOPQRSTUVWXYZ0123456789
// rotationFactor = 39
// output = nopqrstuvwxyzABCDEFGHIJKLM9012345678

function rotationalCipher(input, rotationFactor) {
  let result = "";

  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (char.match(/[a-zA-Z]/)) {
      // Rotate the letter
      let isUpperCase = char === char.toUpperCase();
      let letters = isUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "abcdefghijklmnopqrstuvwxyz";

      result += letters[(letters.indexOf(char) + rotationFactor) % letters.length];
    } else if (char.match(/[0-9]/)) {
      // Rotate the number
      result += (Number(char) + rotationFactor) % 10;
    } else {
      result += char;
    }
  }

  return result;
}

console.log(rotationalCipher("Zebra-493?", 3)); // Output: Cheud-726?
console.log(rotationalCipher("abcdefghijklmNOPQRSTUVWXYZ0123456789", 39)); // Output: nopqrstuvwxyzABCDEFGHIJKLM9012345678


