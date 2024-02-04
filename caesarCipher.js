function cipherFunction(letter, shift) {
  // keep track if letter was uppercase
  let isUpperCase = false;
  if (letter === letter.toUpperCase()) {
    isUpperCase = true;
  }
  const currentLetter = letter.toLowerCase();
  // shift as needed, noting the boundary cases
  const table = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // if shift is > length of alphabet, find remainder
  const shiftAmount = shift % 26;
  const tableIndex = table.indexOf(currentLetter);
  let shiftedLetter = table[tableIndex + shiftAmount];
  // if shift goes past a or z, adjust table position
  if (shiftAmount + tableIndex >= 26) {
    shiftedLetter = table[tableIndex + shiftAmount - 26];
  }
  if (shiftAmount + tableIndex < 0) {
    shiftedLetter = table[tableIndex + shiftAmount + 26];
  }
  // if letter was uppercase, return uppercase.
  if (isUpperCase === true) {
    return shiftedLetter.toUpperCase();
  }
  return shiftedLetter;
}

function caesarCipher(str, shift) {
  let newString = '';

  for (let i = 0; i < str.length; i += 1) {
    const letter = str[i];
    // if not a letter, don't cipher
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(letter)) {
      newString = newString.concat(letter);
      // eslint-disable-next-line no-continue
      continue;
    }
    const newletter = cipherFunction(letter, shift);
    newString = newString.concat(newletter);
  }
  return newString;
}

module.exports = caesarCipher;
