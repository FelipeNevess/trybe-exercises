//2º Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let lista = [2, 3, 6, 7, 10, 1];
let tamanho = lista.length;
let cont = 0;

function listaDeNumeros(lista){
  for (let n = 0; n < tamanho; n += 1){
    cont += lista[n];
  }
  console.log(Math.floor(cont / tamanho))
}
