//1º Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
let str = "reinier";
let contrario = [];
let str_normal = "";

function checkPalindrome(str) {

  for(let i = 0; i < str.length; i++){
    contrario.unshift(str[i]);
  };

  for(let estra in contrario){
    str_normal += contrario[estra]
  };

  if (str == str_normal){
    console.log("A string " + str + " é um palindrome");
    return true;
  }else{
    return false;
    console.log("A palavra " + str + " não é um palindrome")
  }
};