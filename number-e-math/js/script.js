//NUMBER E MATH 1

//.isNaN() e .isInteger()

console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN(5)); //false
console.log(Number.isInteger(20)); //true
console.log(Number.isInteger(2.5)); //false

//.parseFloat() e .parseInt()
//parseFloat retorna um número a partir de uma string
console.log(Number.parseFloat('99.50')); //99.5
console.log(Number.parseInt('100.27 reais')) //100
//.parseInt() --> transforma em integral
//parseInt('100', 10) --> esse 10 são casas decimais do Radix

//n.toFixed(decimais)
//Arredonda o número com base no total de casas decimais do argumento
//Arredonda tanto para cima, quanto para baixo
//Como são métodos do protótipo, ele passa direito na variável
//Quando tem n. é um método direto do número. Não é o método da palavra Number

const preco = 2.99;
console.log(preco.toFixed()); //3

const carro = 1000.455;
console.log(carro.toFixed(2)); //1000.46

const preco2 = 1499.49;
console.log(preco2.toFixed()); //1499

//preco2.toFixed() é uma string, se eu quiser somar com um número, tenho que transformar ele em número, colocando o + na frente. Exemplo:

const preco3 = 2499.49;
console.log(+preco3.toFixed() + 3232); //5731

//O número no console sai sempre em azul e a string em preto
//Se eu quiser fazer o toFixed no console, a sintaxe é essa: (99.99).toFixed()

//n.toString(radix)
//Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.

const precoToString = 2.99;
console.log(precoToString.toString(10)); //'2.99'

//Dificilmente vamos lidar com radix

//n.toLocaleString(lang, options);
//Formata o número de acordo com a língua e opções passadas

const precoToLocale = 59.49;
console.log(precoToLocale.toLocaleString('en-US', {style: 'currency', currency: 'USD'})); //$59.49
console.log(precoToLocale.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})); //R$59.49

//linguagem, estilo currency (moeda), moeda: BRL (exemplo)
//Lembrando, sempre que tiver {} é objeto

//Math
//É um objeto nativo que possui propriedades e métodos de expressões matemáticas comuns

console.log(Math.PI); //3.14159
console.log(Math.E); //2.718
console.log(Math.LN10); //2.303

//Math.abs() Math.ceil() Math.floor() Math.round()
//abs() retorna o valor absoluto, ou seja, transforma negativo em positivo
//ceil() arredonda para cima, retornando sempre uma integral 
//floor() arredonda para baixo
//round() arredonda para o número integral mais próximo

console.log(Math.abs(-5.5)); //5.5
console.log(Math.ceil(4.8334)); //5
console.log(Math.ceil(4.3)); //5
console.log(Math.floor(4.8334)); //4
console.log(Math.floor(4.3)); //4
console.log(Math.round(4.8334)); //5
console.log(Math.round(4.3)); //4

//Esses acima é o que mais usamos, mas tem uma lista deles na doc MDN

//Math.max() Math.min() Math.random()
//max() retorna o maior número de uma lista de argumentos. min() o menor número e random() um número aleatório entre 0 e 1

console.log(Math.max(5, 3, 10, 42, 2)); //42
console.log(Math.min(5, 3, 10, 42, 2));  //2

console.log(Math.random()); //0.XXX aleatório
console.log(Math.floor(Math.random() * 100)); //entre 0 e 100
console.log(Math.floor(Math.random() * 500)); //entre 0 e 500

//Número random entre 72 e 32
const max = 40;
const min = 20;

console.log(Math.floor(Math.random() * (72 - 32 + 1)) + 32);
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//Se eu quiser pegar um número de 0 a 100 basta pegar o Math.random() e multiplicar por 100

//NUMBER E MATH 2

