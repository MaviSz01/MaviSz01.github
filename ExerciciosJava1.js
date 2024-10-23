//Exercicios Baixa Complexidade
//1. Crie uma variável que armazene seu nome e exiba no console.
let nome = "Mavi";
console.log(nome);

//2. Verifique se duas strings são iguais utilizando o operador ==.
let cor1 = "Azul";
let cor2 = "Azul";

if (cor1 == cor2) {
console.log("As cores estão certas!");
} else {
    console.log("As cores estão erradas!");
}

//3. Verifique se o número armazenado em uma variável é maior que 10.
let num1 = 5;
let num2 = 10;

if (num1 < num2) {
    console.log("num1 é menor que num2");
}

//4. Crie um script que exiba "Parabéns!" se a idade de um aluno for maior ou igual a 18.
let idade = 18;

if (idade >= 18) {
    console.log("Parabéns!");
} else {
    console.log("Você tem menos que 18 anos");
}
//5. Faça um programa que verifica se uma pessoa pode votar (idade maior ou igual a 16).
let votar = 16;

if (votar >= 16) {
    console.log("Você já pode votar!");

} else {
    console.log("Você ainda não pde votar");
}

//6. Usando operadores lógicos, verifique se um número está entre 50 e 100.
let numero = 69;

if (numero >= 50 && numero <= 100) {
    console.log("O número está entre 50 e 100.");
} else {
    console.log("O número não está entre 50 e 100.");
}

//Exercicios Média Complexidade
//1. Solicite o nome e a idade do usuário e exiba no console se ele é maior de idade.
let name = "Maria Vitória";
let number = "17";

if (number <=18) {
    console.log("Você é maior de idade.");
} else {
console.log("Você é menor de idade.");
}

//2. Crie um programa que compara duas variáveis numéricas e exibe a maior delas.
let n1 = 25;
let n2 = 75;

if (n1 > n2) {
    console.log("O número maior é: 75");
} else if (n2 > n1) {
    console.log("O maior número é: 25");
} else {
console.log("Ambos números são iguais");
}

//3. Verifique se um texto contém mais de 5 caracteres.
let texto = "Escola";

if (texto.length > 5) {
    console.log("A texto tem 5 ou mais caracteres.");
} else {
    console.log("O texto tem 5 ou mais caracteres.");
}

//4. Peça ao usuário dois números e exiba se ambos são pares.
let numero1 = 8;
let numero2 = 64;

if (numero1 % 2 === 0 && numero2 % 2 === 0) {
    console.log("Ambos os números são pares.");
} else {
    console.log("Um ou nenhum dos números são pares.");
}

//5. Verifique se uma string contém a palavra "JavaScript" (use o método includes).
let Java = "Eu não conhecia JavaScript";

if (Java.includes("JavaScript")) {
    console.log("A frase contém a palavra JavaScript.");
} else {
    console.log("A frase não contém a palavra JavaScript.");
}

//6. Peça ao usuário seu salário e verifique se está acima de R$ 2.000.
let salario = (prompt("2.000"));

if (salario > 2.000) {
console.log("Seu salário é maior que 2.000.");
} else {
    console.log("Seu salário é menor que 2.000.");
}

//Exercicios Alta Complexidade
//1. Crie um programa que verifica se uma senha inserida pelo usuário tem no mínimo 8 caracteres e contém pelo menos um número.
let senha = "senai123";

if (senha.length >= 8 && /\d/.text(senha)) {
    console.log("Senha válida.")
} else {
    console.log("Sua senha deve ter pelo menos 8 caracteres e conter pelo menos um número.")
}

//2. Solicite três notas de um aluno e calcule a média. Se a média for maior que 7, exiba "Aprovado", caso contrário, exiba "Reprovado".
let nota1 = 7;
let nota2 = 8;
let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 8;

if (media > 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//3. Crie um programa que verifique se o ano atual é bissexto (um ano é bissexto se for divisível por 4, mas não por 100, exceto se for divisível por 400).
let Ano = 2024;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log("O ano é bissexto.")
} else {
    console.log("O ano não é bissexto.")
}

//4. Desenvolva um algoritmo que leia três números e determine o maior deles.
let nu1 = 2;
let nu2 = 30;
let nu3 = 71; 

let número;

if (nu1 >= nu2 && nu1 >= nu3) {
    número = nu1;
} else if (nu2 >= nu1 && nu2 >= nu3) {
    número = nu2;
  } else {
    número = nu3;
  }

  console.log("O maior número é: 71.")

//5. Crie um programa que simule um login. O usuário deve digitar o nome de usuário e senha, e o programa deve verificar se ambos estão corretos.
let Usuário = ("Aluno");
let Senha = ("12345");

if (Usuario === "Aluno" && Senha === "12345") {
console.log("Login correto.");
} else {
    console.log("Login incorreto.");
}

//6. Escreva um programa que receba três números como entrada e retorne true se o terceiro número for a soma dos dois primeiros, e false caso contrário.
let numeros1 = 18;
let numeros2 = 11;
let numeros3 = 29;

if (numeros3 === numeros2 + numeros3) {
    console.log("true.");
} else{
    console.log("false.");
}
//7. Crie um sistema de autenticação em que, se o usuário errar a senha três vezes, ele é bloqueado.
let senhaCorreta = "12345"; 
let tentativas = 0;          

while (tentativas < 3) {
  let senhaDigitada = prompt("Digite sua senha:");

  if (senhaDigitada === senhaCorreta) {
    console.log("Login correto!");
    break; // Sai do loop se a senha estiver correta
  }

  tentativas++; // Aumenta o contador de tentativas
  console.log("Senha incorreta.");
}

if (tentativas === 3) {
  console.log("Você foi bloqueado por errar a senha três vezes.");
}

//8. Implemente um código que calcule a pontuação final de um aluno, onde a nota final depende de várias condições: se o aluno fez um trabalho extra, participou de mais de 80% das aulas e obteve uma nota maior que 7 em todas as provas.

let trabalhoExtra = true;
let frequenciaAulas = 85;
let notasProvas = [8, 9, 7.5];

let pontuacaoFinal = 0;

if (trabalhoExtra) {
    pontuacaoFinal += 2;
}

if (frequenciaAulas > 80) {
    pontuacaoFinal += 2;
}