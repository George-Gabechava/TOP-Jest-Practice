function analyzeArray(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);

  let numerator = 0;
  for (let i = 0; i < array.length; i++) {
    numerator += array[i];
  }
  const denominator = array.length;
  const average = numerator / denominator;

  return {
    average,
    min,
    max,
    length: denominator,
  };
}

module.exports = analyzeArray;
