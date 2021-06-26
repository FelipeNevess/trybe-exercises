const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (nums) => {
  let numSome = 0;
  nums.forEach((element1) => numSome += element1);

  return numSome;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
