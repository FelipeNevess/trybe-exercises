// 1º QUESTAO
let a = 4; 
let b = 4;

let soma = a+b; //SOMA
let sub = a-b; //SUBTRAÇÃO
let mult = a*b; //MULTIPLICAÇÃO
let divi = a/b; // DIVISÃO
let modulo = a%b; //MODULO

console.log(soma, sub, mult, divi, modulo)

// 2º QUESTÃO
let valor_1 = 10;
let valor_2 = 20;

if (valor_1 > valor_2){
    console.log('O primeiro valor é maior')
}

else{
    console.log('O segundo valor é maior')
}

// 3º QUESTÃO
let valor1 = 50;
let valor2 = 20;
let valor3 = 5;

if (valor1 > valor2 && valor1 > valor3){
    console.log('Valor 1 é maior')
}

else if (valor2 > valor1 && valor2 > valor3){
    console.log('valor 2 é maior')
}

else{
    console.log('valor 3 é maior')
}

// 4º QUESTÃO
let num = 0;

if (num > 0){
    console.log('POSITIVO')
}

else if (num < 0){
    console.log('NEGATIVO')
}

else{
    console.log('ZERO')
}

// 5º QUESTÃO
let vert_A = 120;
let vert_B = 20;
let vert_C = 40;
let som = vert_A + vert_B + vert_C

if (som ==  180){
    console.log(true)
}

else if (soma < 0){
    console.log('Invalido')
}

else{
    console.log(false)
}

// 6º QUESTÃO
let xadrez = "bispo";
let nome_xadrez = "BISPO";

if (xadrez == nome_xadrez.toLowerCase()){
    console.log('Correto - Bispo')
}

else{
    console.log('Invalido')
}

// 7º QUESTÃO   
let number = 90;

if (number >= 90 && number < 100){
    console.log("A")
}

else if (number >= 80 && number < 90){
    console.log("B")
}

else if (number >= 70 && number < 80){
    console.log("C")
}

else if (number >= 60 && number < 70){
    console.log("D")
}

else if (number >= 50 && number < 60){
    console.log("E")
}

else if (number < 50 && number > -1){
    console.log("F")
}

else if (number < 0){
    console.log("Invalido")
}

else if (number > 99){
    console.log("Invalido")
}

// 8º QUESTÃO

let num1 = 5;
let num2 = 5;
let num3 = 5;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0){
    console.log(true)
}

else{
    console.log(false)
}

// 9º QUESTÃO
let numb1 = 6;
let numb2 = 5;
let numb3 = 6;

if (numb1 % 2 == 1 || numb2 % 2 == 1 || numb3 % 2 == 1){
    console.log(true)
}

else{
    console.log(false)
}

// 10º QUESTÃO

let costOfProduct = 1;
let saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  let totalCostOfProduct = costOfProduct * 1.2;
  let totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};


// 11ª QUESTÃO

let aliquotINSS;
let aliquotIR;

let grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));