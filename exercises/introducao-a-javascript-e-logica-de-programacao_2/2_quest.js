// 2º Para o segundo exercício, some todos os valores contidos no array e imprima o resultado //

let numeri = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0;

for (let valore = 0; valore < numeri.length; valore += 1){
  cont += numeri[valore]
}

console.log(cont)