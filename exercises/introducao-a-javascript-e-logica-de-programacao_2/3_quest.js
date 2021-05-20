// 3º Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array

let siffra = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let disken = 0;

for (let varde = 0; varde < siffra.length; varde += 1){
  disken += siffra[varde]
}

console.log(disken / siffra.length)