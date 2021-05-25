//7º Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word 
let palavra = 'felipe';
let fimPalavra = 'pe';

function verificaFimPalavra(palavra, fimPalavra) {

  controle = true;

  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  
  return controle;
}