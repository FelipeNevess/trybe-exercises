let nume = [2, 4, 6, 7, 10, 0, -3];

function numeros(nume){
  let indice = 0;
  for (let n in nume){
    if (nume[indice] > nume[n]){
      indice = n;
    }
  }
  return indice;
}

console.log(nume)