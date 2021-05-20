//4º Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: 
//"valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numere = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let tejghea = 0;

for (let valoare = 0; valoare < numere.length; valoare += 1){
  tejghea += numere[valoare]
}

let divisao = tejghea / numere.length

if (divisao > 20){
  console.log("valor maior que 20")
}else{
  console.log("valor menor ou igual a 20")
}