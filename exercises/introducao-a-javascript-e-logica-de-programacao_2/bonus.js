//BÔNUS

let broj = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let new_broj = []

for (let index = broj.length; index > -1; index -= 1) {
  for (let secondIndex = broj.length; secondIndex > -1; secondIndex -= 1) {
    if (broj[index] < broj[secondIndex]) {
      let position = broj[index];
      broj[index] = broj[secondIndex];
      broj[secondIndex] = position;
    }
  }
}

for (let dex = 0; dex < broj.length; dex += 1) {
  if (dex + 1 < broj.length) {
    new_broj.push(broj[dex] * broj[dex + 1]);
  } else {
    new_broj.push(broj[dex] * 2);
  }
}


console.log(new_broj)
console.log(broj)