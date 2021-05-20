// 3º Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array

let numbe = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let contador = 0;

for (let valor = 0; valor < numbe.length; valor += 1){
  contador += numbe[valor]
}

console.log(contador / numbe.length)