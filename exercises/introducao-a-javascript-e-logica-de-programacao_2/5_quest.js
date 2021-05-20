//5º Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let nummers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let groter = 0;

for (let numm = 0; numm < nummers.length; numm += 1){
  if (numm == 0){
    groter = nummers[numm]
  }else{
    if (nummers[numm] > groter){
      groter = nummers[numm]
    }
  }
}

console.log(groter);
