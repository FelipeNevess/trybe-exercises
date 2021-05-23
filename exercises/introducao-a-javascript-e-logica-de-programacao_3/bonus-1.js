let num = 7;
let ast = "*";
let divisao = (num + 1) / 2;

let ladoEsquerdo = divisao;
let ladoDireito = divisao;


for (let linha = 0; linha <= divisao; linha += 1){
  let list = "";
  for (let coluna = 0; coluna <= num; coluna += 1){
    if (coluna == ladoEsquerdo || coluna == ladoDireito || linha == divisao){
      list += ast;
    }else{
      list += " "
    }
  }

  ladoEsquerdo -= 1;
  ladoDireito += 1;
  console.log(list)
}