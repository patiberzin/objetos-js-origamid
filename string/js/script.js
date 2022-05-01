/*const comida = 'Pizza';
const frase = "A melhor comida";
const agua = new String('Agua');

console.log(comida.length); //5
console.log(agua[2]); //u
console.log(frase[frase.length - 1]); //a - macete para pegar o último valor
//o index eu sempre tenho que tirar 1, porque começa de 0*/

//.charAt() é um método

const linguagem = "JavaScript";

console.log(linguagem.charAt(0));
console.log(linguagem.charAt(linguagem.length - 1));

//concatenar as strings

const frase = "A melhor linguagem é ";

const fraseCompleta = frase.concat(linguagem, '!!');
console.log(fraseCompleta);

//str.includes(search, position)

const fruta = 'Melancia';
const listaFrutas = 'Morango, Uva, Melancia';

const teste1 = listaFrutas.includes(fruta); //true
const teste2 = fruta.includes(listaFrutas); //false

console.log(teste1, teste2);

//str.endsWith(search)
//str.startsWith(search)

console.log(fruta.endsWith('cia')); //true

console.log(fruta.startsWith('Me')); //true

console.log(fruta.startsWith('lan'));//false

//str.slice(start, end)

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)); //Dep
console.log(transacao2.slice(0, 3)); //Dep
console.log(transacao3.slice(0, 3)); //Tax

console.log(transacao1.slice(12)); //cliente
console.log(transacao1.slice(-4)); //ente
console.log(transacao1.slice(3, 6)); //ósi

//str.substring(start, end)
//valor negativo não funciona aqui

const lingua = "JavaScript";
console.log(lingua.substring(3,5)); //aS
console.log(lingua.substring(0,4)); //Java
console.log(lingua.substring(4)); //Script
console.log(lingua.substring(-3)); //JavaScript

//str.indexOf(search)
//str.lastIndexOf(search)

const instrumento = 'Guitarra';

instrumento.indexOf('r'); //5
instrumento.lastIndexOf('r'); //6
instrumento.indexOf('ta'); //3
