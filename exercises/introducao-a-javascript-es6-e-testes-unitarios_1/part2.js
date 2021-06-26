const assert = require('assert');
/* const contador = document.querySelector('.badge');

const a = document.querySelector('#clicar').addEventListener('click', () => {
  let numero = parseInt(contador.textContent) + 1;
  return contador.textContent = numero;
}); */

///////////////////////////////////////////////////////////////////////

const trybe = "Tryber x aqui!";
const habilidades = ['CSS', 'JavaScript', 'HTML', 'Python 3'];

const mudarString = element1 => trybe.includes('x') ? `Tryber ${element1} aqui!` : '';
const concatenar = (element2, element3) => `${element2} Minhas cinco principais habilidades são: ${element3}`;

assert.deepStrictEqual(mudarString('Bebeto'), "Tryber Bebeto aqui!");
assert.deepStrictEqual(concatenar(mudarString('Bebeto'), habilidades), 'Tryber Bebeto aqui! Minhas cinco principais habilidades são: CSS,JavaScript,HTML,Python 3');