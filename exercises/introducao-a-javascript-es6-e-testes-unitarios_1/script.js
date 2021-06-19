const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
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

//
const fatorial = number => {
  let resultado = 1;
  for (let i = 2; i <= number; i += 1) {
    resultado *= i;
  }

  return resultado;
}

console.log(fatorial(5))

//

const TamanhoFrase = frase => {
  const palavra = frase.split(" ");
  let maior = palavra[0];
  for (let i = 0; i < palavra.length; i += 1) {
    if (palavra[i].length > maior.length) {
      maior = palavra[i];
    }
  }
  console.log(maior);
}

const button = document.getElementById('click');
let clickCount = 0;
button.addEventListener('click', () => {
  clickCount += 1;
  button.innerHTML = clickCount;
})

/* const stringSub = str => {
let a = 'Tryber x aqui!';
return a.replace('x', str);
}
 */

const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (paramOne) {
  const fun1 = paramInner => (
    `Tryber ${paramInner} aqui!

    Tudo bem?`
  )

  let result = `${fun1(paramOne)}

  Minhas cinco principais habilidades são:`

  array.forEach((skill, index) =>
  result = `${result}

  - ${skill}`)

  result = `
  {result}

  #goTrybe
  `

  return result
}

console.log(buildSkillsPhrase("Lucas"))