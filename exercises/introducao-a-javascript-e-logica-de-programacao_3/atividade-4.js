let num = 10;
let ast = "*";
let lista = "";
let divisao = (num + 1) / 2;

let ladoEsquerdo = divisao;
let ladoDireito = divisao;


for (let linha = 0; linha <= divisao; linha += 1){
  for (let coluna = 0; coluna <= num; coluna += 1){
    if (coluna > ladoEsquerdo && coluna < ladoDireito){
      lista += ast;
    }else{
      lista += " "
    }
  }
  console.log(lista)
  lista = "";
  ladoDireito += 1;
  ladoEsquerdo -= 1;
}