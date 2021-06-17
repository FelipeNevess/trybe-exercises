function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const mudarOrden = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const a = mudarOrden();
console.log(`A ordem ficou ${a}`);

const fatorial = number => {
  let resultador = 1;

  for (let i = 2; i <= number; i += 1) {
    resultador *= i;
  }

  return resultador;
}

console.log(fatorial(5))

// RECURSIVA
const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5))
