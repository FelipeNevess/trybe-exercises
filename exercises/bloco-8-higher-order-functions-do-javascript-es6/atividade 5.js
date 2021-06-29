const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acumulador, value) => acumulador + value.split('').reduce((acc, voo) => voo === 'a' || voo === 'A' ? acc + 1 : acc, 0), 0)
}

console.log(containsA());

/* assert.deepStrictEqual(containsA(), 20);
 */