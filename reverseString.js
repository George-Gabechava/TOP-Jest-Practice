function reverseString(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    const letter = str[i];
    newString = newString.concat(letter);
  }
  return newString;
}

module.exports = reverseString;
