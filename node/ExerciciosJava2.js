//Nivel Fácil
//1. Declare uma variável nome e atribua a ela o valor do seu nome. Em seguida, exiba o valor no console.
let nome = "Maria Vitória.";
console.log(nome);

//2. Crie duas variáveis, x e y, atribua a elas os valores 10 e 20, respectivamente, e exiba a soma delas no console.
let x = 10;
let y = 20;

let soma = x + y;
    console.log(soma);

//3. Crie uma variável idade e atribua a ela a sua idade. Use um operador relacional para verificar se a idade é maior que 18, e exiba o resultado no console.
let idade = 17;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

//4. Declare três variáveis: a, b e c. Atribua valores a elas e calcule a média aritmética.
let a = 3;
let b = 6;
let c = 9;

let média = (a + b + c) / 3;

console.log("A média aritmética é: 6.");

//5. Crie uma variável preco e atribua o valor de um produto. Use operadores de incremento para aumentar o preço em 10%.
let preco = 100;
let aumento = preco * 0.10; 
let precoNovo = preco + aumento;

console.log("O preço com 10% de aumento é: 110");

//Nivel Médio
//1. Crie uma variável anoNascimento e calcule a idade com base no ano atual, usando operadores aritméticos.
let anoNacimento = 2007;
let anoAtual = 2024;

if (anoNascimento - anoAtual) {
    console.log("Você tem 17 anos.")
}

//2. Dado um número inteiro n, exiba true se for par e false se for ímpar.
let n = 10;

let isPar = n % 2 === 0;

console.log(isPar);

//3. Declare uma variável salario e aplique um desconto de 10% caso o salário seja maior que 2000. Caso contrário, aumente o salário em 5%.
let salario = 2500; 

if (salario > 2000) {
    salario -= salario * 0.10; 
} else {
    salario += salario * 0.05;  
}

console.log("O novo salário é: 2250");

//4. Crie uma expressão que calcule o perímetro de um círculo com base em um raio r.
const r = 5;
const pi = Math.PI;
const perimetro = 2 * pi * r; 

console.log("O perímetro do círculo com raio ${r} é ${perimetro.toFixed(2)");

//5. Declare duas variáveis num1 e num2. Use a estrutura condicional para verificar qual número é maior.
const num1 = 250;
const num2 = 200;

if (num1 > num2) {
    console.log("O num1 é maior que o num2");
} else {
    ("O num2 é maior que o num1");
}

//6. Crie um programa que converte graus Celsius em Fahrenheit e exiba o resultado no console.
const celsius = 25;
const fahrenheit = celsius * 1.8 + 32; 

console.log(fahrenheit);

//7. Escreva um código que troque os valores de duas variáveis sem usar uma terceira variável.
let a1 = 5;
let b1 = 10;

a1 = a1 + b1;
b1 = a1 - b1; 
a1 = a1 - b1; 

console.log("a1 =", a1);
console.log("b1 =", b1);

//Nivel Dificil
//Crie uma variável num e verifique se o número é divisível por 3 e por 5 ao mesmo tempo, usando o operador &&.
let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("É divisivel por 3 e por 5.")
} else {
    console.log("Não é divisivel por 3 e por 5.")
}

//2. Crie um programa que calcule o fatorial de um número n usando uma estrutura de repetição e operadores aritméticos.

const n1 = 5; 
let fatorial = 1; 

for (let i = 1; i <= n; i++) {
    fatorial *= i;
}

console.log("O fatorial de ${n} é ${fatorial}.");

//3. Escreva um programa que leia três números e verifique se eles podem formar os lados de um triângulo válido.
// Solicita ao usuário que insira três números
const aa = parseFloat(prompt("3"));
const bb = parseFloat(prompt("4"));
const cc = parseFloat(prompt("5"));

// Verifica se os lados podem formar um triângulo
if (aa + bb > cc && aa + cc > bb && bb + cc > aa) {
    console.log("Os números podem formar um triângulo válido.");
} else {
    console.log("Os números NÃO podem formar um triângulo válido.");
}

//4. Dado um número inteiro x, use operadores para verificar se o número está dentro do intervalo fechado [10, 20].
const x1 = parseInt(prompt("15"));

if (x >= 10 && x <= 20) {
    console.log("O número ${x} está dentro do intervalo [10, 20].");
} else {
    console.log("O número ${x} NÃO está dentro do intervalo [10, 20].");
}

//5. Crie um programa que verifique se um ano é bissexto. O ano é bissexto se for divisível por 4, mas não por 100, exceto se também for divisível por 400.
let Ano = 2024;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log("O ano é bissexto.")
} else {
    console.log("O ano não é bissexto.")
}

//6. Crie um programa que leia dois números e, sem usar condicionais, retorne o maior dos dois.
const nu1 = parseFloat(prompt("24"));
const nu2 = parseFloat(prompt("76"));

const maior = Math.max(num1, num2);

console.log("O maior número é ${maior}.");

//7. Crie um programa que calcule o quadrado da diferença entre dois números e exiba o resultado.
// Solicita ao usuário que insira dois números
const numr1 = parseFloat(prompt("16"));
const numr2 = parseFloat(prompt("4"));

const diferenca = num1 - num2;

const quadradoDiferenca = diferenca * diferenca;

console.log("O quadrado da diferença entre ${num1} e ${num2} é ${quadradoDiferenca}.");

//8. Escreva um código que receba três notas de um aluno e calcule sua média ponderada, considerando que as notas têm pesos 2, 3 e 5, respectivamente.

const nota1 = parseFloat(prompt("7.0"));
const nota2 = parseFloat(prompt("8.5"));
const nota3 = parseFloat(prompt("9.0"));

const peso1 = 2;
const peso2 = 3;
const peso3 = 5;

const mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

console.log("A média ponderada do aluno é ${mediaPonderada.toFixed(2)}.");