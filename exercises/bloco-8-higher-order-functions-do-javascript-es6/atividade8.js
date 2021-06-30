const assert = require('assert');

const greet = (nome, comprimento = 'Hi') => {
  return `${comprimento} ${nome}`
}

console.log(greet('John'))
assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');
