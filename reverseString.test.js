const reverse = require('./reverseString');

test('reverse string', () => {
  expect(reverse('something')).toBe('gnihtemos');
});
