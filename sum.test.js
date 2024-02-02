/* eslint-disable no-undef */

const capitalize = require('./sum');

test('capitalize', () => {
  expect(capitalize('something')).toBe('S');
});
