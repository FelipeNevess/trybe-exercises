const assert = require('assert');
const testingScope = escopo => escopo === true ? `ótimo, fui utilizada no escopo !` : `Não devo ser utilizada fora meu escopo (else)`;

assert.deepStrictEqual(testingScope(true), `ótimo, fui utilizada no escopo !`);
//////////////////////////////////////////////////////////////////////////////////////
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
function mudarOrden() {
  return oddsAndEvens.sort((a, b) => a - b);
}

const a = mudarOrden();
/* console.log(`A ordem ficou ${a}`); */
assert.deepStrictEqual(mudarOrden(), [2, 3, 4, 7, 10, 13]);
/////////////////////////////////////////////////////////////////////////////////////////
const fatorial = number => {
  let resultado = 1;
  for (let i = 2; i <= number; i += 1) {
    resultado *= i;
  }

  return resultado;
}
// FORMA RECUSIVA
const fat = num => num > 1 ? num * fat(num - 1) : 1;

assert.deepStrictEqual(fatorial(5), 120);
assert.deepStrictEqual(fat(5), 120);
//////////////////////////////////////////////////////////////////////////////////////////////
const tamanhoFrase = frase => {
  const palavra = frase.split(" ");
  let maior = palavra[0];
  palavra.forEach((n1) => n1.length > maior.length ? maior = n1 : null);
  return maior;
}

assert.deepStrictEqual(tamanhoFrase("Antônio foi no banheiro e não sabemos o que aconteceu"), "aconteceu");
//////////////////////////////////////////////////////////////////////////////////////////////////
