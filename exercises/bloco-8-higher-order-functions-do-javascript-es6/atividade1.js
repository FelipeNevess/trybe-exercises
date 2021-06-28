const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = arrays.reduce((n1, n2) => n1.concat(n2));

assert.deepStrictEqual(flatten, ['1', '2', '3', true, 4, 5, 6]);