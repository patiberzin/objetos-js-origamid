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

//str.padastart(n, str)
//str.padend(n, str)

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '.'));
})

listaPrecos[0].padStart(10, '.');
listaPrecos[0].padEnd(10, '.');

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); //substitui vírgula pelo ponto

//str.split(padrão)
//Quebra toda vez que encontra o que informei. Exemplo:

//const arrayItens = listaItens.split(' ');
//console.log(arrayItens);



//const htmlNovo = htmlArray.join('section'); //join é um método de array

//Criar uma array que vai quebrar sempre que a div aparecer

const htmlText = '<div>O melhor item</div><div>A melhor lista </div>';
const htmlArray = htmlText.split('div');
const novoHTML = htmlArray.join('section');

const frutasArray = ['Banana', 'Melancia', 'Laranja'];
const juntarArrays = frutasArray.join('a');
console.log(juntarArrays);
console.log(novoHTML);

//str.tolowercase()
//str.touppercase()

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLocaleLowerCase() === 'feminino');
(sexo2.toLocaleLowerCase() === 'feminino');
(sexo3.toLocaleLowerCase() === 'feminino');

//str.trim()
//str.trimstart()
//str.trimend()

const valor = ' R$ 23.00 '
console.log(valor.trim());
console.log(valor.trimStart());
console.log(valor.trimEnd());