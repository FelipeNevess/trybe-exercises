const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
assert.notDeepStrictEqual(Object.keys(obj1)[0], Object.keys(obj2)[0], Object.keys(obj1)[1], Object.keys(obj2)[1]);
assert.notDeepStrictEqual(Object.values(obj1)[0], Object.values(obj2)[0], Object.values(obj1)[1], Object.values(obj2)[1]);

assert.deepStrictEqual(Object.keys(obj1)[0], Object.keys(obj3)[0], Object.keys(obj1)[1], Object.keys(obj3)[1]);
assert.notDeepStrictEqual(Object.values(obj1)[0], Object.values(obj3)[0], Object.values(obj1)[1], Object.values(obj3)[1]);

assert.notDeepStrictEqual(Object.keys(obj2)[0], Object.keys(obj3)[0], Object.keys(obj2)[1], Object.keys(obj3)[1]);
assert.notDeepStrictEqual(Object.values(obj2)[0], Object.values(obj3)[0], Object.values(obj2)[1], Object.values(obj3)[1]);
