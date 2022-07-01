/*const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((item, index, array) => {
  console.log(item.toLocaleUpperCase(), index, array);
})

console.log(carros);


//Diferença do forEach para map

const li = document.querySelectorAll('li');

const retornoForeach = li.forEach((item, index) => {
  item.classList.add('ativo' + index)
});

console.log(retornoForeach); //retorna undefined

////

const carros = ['Ford', 'Fiat', 'Honda'];

const novaArray = carros,map((item, index, array) => {
  console.log(item.toUpperCase(), index, array);
}) 
console.log(novaArray);*/

/*const carros = ['Ford', 'Fiat', 'Honda'];

const novaArray = carros.map((item, index, array) => {
  console.log(item.toLocaleUpperCase, index, array);
  return item;
});

console.log(novaArray[1] = 'teste'); //modifiquei o primeiro item da array para teste

const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map(n => n*2);
console.log(numerosX2);

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);

function nomeAulas(aula) {
  return aula.nome;
}

const arrayNomeAulas = aulas.map(nomeAulas);
console.log(arrayNomeAulas)

console.log(tempoAulas);*/

/*const aulas = [10, 25, 30];

const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
  console.log(acumulador, item, index, array)
}, 0); //começa com o valor do acumulador de 0*/

//break da origamid para exercício da rocketseat

//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços coloque _

/*const texto = "Eu quero viver o amor"

const text = texto.split(' '); //separou em array
console.log(text);

const textWithUnderscore = text.join('_'); //junta tudo com _
console.log(textWithUnderscore);

//Verificar se o texto contem a palavra amor

const frase = 'Eu quero viver!';

console.log(frase.includes('amor'));

const techs = ['html', 'css', 'js'];

//adicionar um item ao fim
console.log(techs.push('python')); //certo
//adicionar no começo
console.log(techs.unshift('php')); //certo
//remover do fim
console.log(techs.pop()); //certo
//remover do começo
console.log(techs.shift()); //certo
//pegar somente alguns elementos do array
console.log(techs.slice(1, 3));

//remover 1 ou mais itens em qualquer posição do array
//minha resposta: console.log(techs.removeChild());
//resposta correta: 
console.log(techs.splice(1, 1));

//encontrar a posição de um elemento no array
console.log(techs.indexOf()); //certo

//Operador condicional ternário
let pao = true;
let queijo = true;

const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim';

//? significa então
//: significa senão

//Throw e Try/Catch
//throw
function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório!';
  }
  console.log(name);
}

//try...catch
try {
  sayMyName('Pati')
} catch (e) {
  console.log(e)
}

console.log('Após o try/catch');*/

/*const aulas = [10, 25, 30];

const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
  console.log(acumulador, item, index);
  return acumulador + item;
}, 33);*/

/*const numeros = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros.reduce((anterior, atual) => anterior > atual ? anterior : atual, 0);

console.log(maiorNumero);*/

//Verficar se todos os elementos de um array são maiores que 10

const anotherArray = [12, 5, 8, 130, 44]

console.log(anotherArray.every(elem => elem > 10))

//Verificar se todos são maiores de idade

const tchurma = [
  {id: 12, name: 'Frederico', age: 8},
  {id: 47, name: 'Francisca', age: 7},
  {id: 77, name: 'Ramon', age: 48},
  {id: 85, name: 'Zenon', age: 52},
]

console.log(tchurma.every(p => p.age >= 18))

//find() - Procurar ou verificar um valor dentro de um array ou objeto, sendo que esse retorno vai ser do primeiro elemento que satisfizer o teste.

const pizzas = [
  "mussarela",
  "calabresa",
  "portuguesa",
  "marguerita"
]

const findPizza = pizzas.find(p => p.startsWith('m'));
console.log(findPizza); //mussarela - retorna o valor do primeiro elemento encontrado.

///

const fruits = [
  {name: 'jaca', quantity: 2},
  {name: 'banana', quantity: 0},
  {name: 'cereja', quantity: 5}
]

const findFruits = fruits.find(f => f.name === 'cereja');

console.log(findFruits);

//aparece isso no console: {name: 'cereja', quantity: 5}

//filter()

const yetAnotherArray = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5]

const uniqueArray = yetAnotherArray.filter((elem, index, arr) => arr.indexOf(elem) === index);
console.log(uniqueArray);
//tudo que é repetido, é eliminado

//Filter em objetos:

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const maiores15 = aulas.filter((aula) => {
  return aula.min > 15;
});
console.log(maiores15);