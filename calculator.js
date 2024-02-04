const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  // Handle division by zero
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
};

const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

module.exports = calculator;
