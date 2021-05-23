let numero = 13;
let divisiveis = 0;

for (let quantidade = 0; quantidade <= numero; quantidade += 1){
  if (numero % quantidade == 0) {
    divisiveis += 1;
  }
}

if (divisiveis == 2) {
  console.log(numero + " é primo")
}else{
  console.log(numero + " não é primo")
}