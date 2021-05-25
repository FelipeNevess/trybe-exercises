//6º Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
let n = 5;

function somatorio(n){
  let cont = 0;

  for(let x = 0; x <= n; x += 1){
    cont += x;
  }
  return cont;
}
