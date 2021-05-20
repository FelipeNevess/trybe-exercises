//6ª Descubra quantos valores ímpares existem no array e imprima o resultado. 
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let helu = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let pakui = [];

for (let waiwai = 0; waiwai < helu.length; waiwai += 1){
  if (helu[waiwai] % 2 == 1){
    pakui += helu[waiwai] + "-"
  }
}

console.log(pakui)