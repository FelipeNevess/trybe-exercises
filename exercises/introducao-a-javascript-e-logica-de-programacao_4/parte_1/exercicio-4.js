// 4ª Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  console: 'Sim'
};

info.console = "Sim";

for (let v in info){
  console.log(info[v])
}