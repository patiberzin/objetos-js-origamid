//Exercícios do github: https://github.com/Marlon-Santos/Javascript-exercise-Reduce-and-Filter

/*Exercícios: Os exercícios aqui propostos visam reforçar a prática da linguagem javascript.

1. Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.

2. Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.

3. Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.

4. Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor.

5. Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor).
6. Dado um vetor com números, retorne somente os números pares;
7. Dado um vetor com números, retorne somente os números ímpares;
8. Uma função é chamada da seguinte forma: calculadora(10, '+', 20) crie o corpo da função de forma que ela realize as 4 operações aritméticas.
9. Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo.*/

//1. Supondo que o vetor seja uma Array:

const array = [50, 600, 30, 880];

const somaArray = Array.prototype.reduce.call(array, (acumulador, item) => {
    return acumulador + item
}, 0);

console.log(somaArray);

//2. 

const parImpar = [52, 33, 98, 100, 81];

//primeiro filtrar os valores pares:
//para descobrir o que é par: tudo que é divisível por 2 com resto 0 é par.
//por isso vamos filtrar e verificar cada número

const numPar = parImpar.filter(num => (num % 2) === 0);

console.log(numPar);

const somaPar = Array.prototype.reduce.call(numPar, (acumulador, par) => {
    return acumulador + par;
}, 0);

console.log(somaPar);

//3. Somar ímpares:

const imparPar = [31, 93, 55, 102, 676, 232]

//verificar impar: todo número dividido por 2 cujo resto é 1

const numImpar = imparPar.filter(num => (num % 2) === 1);

console.log(numImpar);

const somaImpar = Array.prototype.reduce.call(numImpar, (acumulador, impar) => {
    return acumulador + impar
}, 0);

console.log(somaImpar);

//4. para retornar um objeto, usar reduce
//quantas vezes o valor aparece no vetor

const valores = [2, 2, 50, 60, 100];





