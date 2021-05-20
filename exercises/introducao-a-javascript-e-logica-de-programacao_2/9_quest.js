// 9ª Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let list = [];
let nume = 26;

for (let quant = 0; quant < nume; quant += 1){
  list += (quant / 2) + "|";
}

console.log(list)