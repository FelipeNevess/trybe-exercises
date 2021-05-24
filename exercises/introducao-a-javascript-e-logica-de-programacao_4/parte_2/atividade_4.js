//4º Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let listaDeNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let maiorCaractere = '';

function funcName(listaDeNomes){
  for (let c in listaDeNomes){
    if (listaDeNomes[c] == 0){
      maiorCaractere = listaDeNomes[c];
    }else{
      if (listaDeNomes[c].length > maiorCaractere.length){
        maiorCaractere = listaDeNomes[c];
      };
    };
  };
  console.log(maiorCaractere);
};
