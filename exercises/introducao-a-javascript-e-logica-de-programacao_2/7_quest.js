// 7º Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let tall = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let mindre = 0;

for (let verdi = 0; verdi < tall.length; verdi += 1){
  if (verdi == 0){
    mindre = tall[verdi]
  }else{
    if (tall[verdi] < mindre){
      mindre = tall[verdi]
    }
  }
}

console.log(mindre)