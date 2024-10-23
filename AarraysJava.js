//NIvel Fácil
//1. *Crie um array vazio e adicione três números a ele*.
let numeros = [];
numeros = (5);
numeros = (14);
numeros = (53);

//2. *Acesse o primeiro elemento de um array e exiba-o no console*.
let numeros1 = [5, 14, 53];
console.log(numeros1[0]);
    
//3. *Altere o valor do segundo elemento de um array para o número 100*.
let numeros2 = [5, 14, 53];
console.log[2] = 100;

//4. *Crie um array que contenha cinco strings e mostre no console a quantidade de elementos que ele possui*.
   let cores = [amarelo, azul, roxo, preto, laranja];
   console.log(cores.length);

//5. *Crie um array com cinco números e some todos eles*.
let numeros3 = [5, 10, 20, 30, 40];
let soma = 0;

for (let i = 0; i < numeros3.length; i++) {
    soma += numeros3[i];
}

console.log(soma);

//6. *Remova o último elemento de um array e exiba o novo array no console*.
let numeros4 = [5, 10, 20, 30, 40];
numeros.pop();

console.log(numeros);

//7. *Adicione um elemento ao início de um array*.
   let frutas = [morango, uva];
   frutas.unshift(mamão);

   console.log(frutas);

//8. *Combine dois arrays diferentes em um único array*.
    let coresquentes = [amarelo, vermelho, laranja];
    let coresfrias = [azul, roxo, verde];

    colors = coresquentes.concat(coresfrias);
    console.log(colors);

    //Nivel Médio
//1. *Percorra um array com um for e exiba todos os elementos*.
    let numeros5 = [1, 2, 3, 4 , 5]
    for (let i = 0; i < numeros5.length; i++) {
        console.log(numeros5[i]);
    }
//2. *Crie um array de objetos que representem livros (com nome e autor) e percorra-o exibindo o nome de cada livro*.
    let livros = [{nome: 'A Rainha Vermelha', autor: 'Victoria Aveyard'}, {nome: 'É assim que começa', autor: 'Colleen Hoover'}];
    
    for (let i = 0; i < livros.length; i++) {
        console.log(livros[i].nome);
    }

//3. *Utilize o método map() para dobrar os valores de um array de números*.
   let numbers = [1, 2, 3, 4, 5];

let numerosDobrados = numbers.map(x => x * 2);

console.log(numerosDobrados);

//4. Filtre um array pa*ra conter apenas números maiores que 10*.
const numbers1 = [5, 12, 7, 20, 3, 15, 10, 25];
const maioresQueDez = numbers.filter(num => num > 10);
console.log(maioresQueDez); 

//5. *Crie um array de números e verifique se todos os elementos são pares usando o método every()*.
    const numbers2 = [2, 4, 6, 8];
    const todosPares = numbers2.every(x => x % 2 === 0);

console.log(todosPares);

//6. *Encontre o primeiro número negativo em um array utilizando o método find()*.
const numbers3 = [2, 4, -5, 8, 10];
const negativo = numbers3.find(num => num < 0);

console.log(negativo);

//7. *Ordene um array de números em ordem crescente*.
   const numbers4 = [14, 8, 5, 37, 20];
   const crescente = numbers4.short((a, b) => a - b);

   console.log(crescente);

//8. *Adicione um novo elemento a um array em uma posição específica, sem substituir nenhum outro elemento*.
const array = [1, 2, 4, 5];
array.splice(2, 0, 15);

console.log(array);

//Nivel Dificil
//1. *Crie uma função que recebe dois arrays e retorna um array com os elementos que estão presentes em ambos (interseção)*.
function intersecao(arr1, arr2) {
    
    return arr1.filter(elemento => arr2.includes(elemento));
  }
  
  let array1 = [3, 15, 9, 28, 5];
  let array2 = [37, 9, 10, 21, 3];
  
  let resultado = intersecao(array1, array2);
  console.log(resultado); 

//2. *Implemente uma função que, dado um array de números, retorna a média aritmética dos valores*.
function mediaAritmetica(arr) {
    
    if (arr.length === 0) return 0;
    
    let soma = arr.reduce((acc, num) => acc + num, 0);
    return soma / arr.length;
  }
  
  let numbers5 = [10, 20, 30, 40, 50];
  console.log(mediaAritmetica(numbes5)); 
  
//3. *Crie uma função que inverte a ordem dos elementos de um array, sem utilizar o método reverse()*.
function inverte(arr) {
    let arrInvertido = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      arrInvertido.push(arr[i]); 
    }
    
    return arrInvertido;
  }
  
  // Exemplo de uso
  let arrays = [1, 2, 3, 4, 5];
  console.log(inverte(arrays)); 

function Duplicados(arr) {
    let arrayDuplicatas = [];
  
    for (let i = 0; i < arr.length; i++) {
     
      if (!arrayDuplicatas.includes(arr[i])) {
        arrayDuplicatas.push(arr[i]);
      }
    }
  
    return arrayDuplicatas;
  }

  let array3 = [1, 2, 2, 3, 4, 4];
  console.log(Duplicados(array));