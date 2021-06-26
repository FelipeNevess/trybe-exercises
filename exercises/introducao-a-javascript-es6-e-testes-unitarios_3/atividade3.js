const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
assert.deepStrictEqual(typeof(myRemoveWithoutCopy), 'function')
assert.deepStrictEqual(Array.isArray(myRemoveWithoutCopy([1, 2, 3, 4], 3)), true);
assert.notDeepStrictEqual(Array.isArray(myRemoveWithoutCopy([1, 2, 3, 4], 3)), false);
assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 3], 3), [1,2,3,4]);
let cloneArr1 = [5,6,7,8];
myRemoveWithoutCopy(cloneArr1, 5);
assert.deepStrictEqual(cloneArr1.length, 3);
assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4,5], 5), [1,2,3,4]);
