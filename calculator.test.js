const calculator = require('./calculator');

test('calc add', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('calc subtract', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('calc multiply', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('calc divide', () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test('calc divide by 0', () => {
  expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
});
