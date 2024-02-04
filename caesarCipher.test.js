const caesarCipher = require('./caesarCipher');

test('Pizza test', () => {
  expect(caesarCipher('Pizza, pizza, & pizza.', 1)).toBe('Qjaab, qjaab, & qjaab.');
});
