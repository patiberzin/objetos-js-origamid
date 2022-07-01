/*const perimetro = new Function('lado', 'return lado * 4');
//ao acessar perimetro no Console, verá que é uma função normal. Mas não vamos usar ela assim. Essa é só uma explicação.

function somar(n1, n2) {
    return n1 + n2;
  }

console.log(somar.name);

///

function darOi(nome, idade) {
    console.log('Oi para você ' + nome + ' ' + idade)
}

darOi.call({}, 'Pati', 33);

//

function descricaoCarro(velocidade) { //retorna Honda 2015
    console.log(this)
    console.log(this.marca + ' ' + this.ano + ' ' + velocidade);
}

descricaoCarro.call({marca: 'Honda', ano: 2015}, 100);

//

const carros = ['Ford', 'Fiat', 'VW'];
const frutas = ['Banana', 'Uva', 'Pêra'];

carros.forEach.call(frutas, (item) => {
    console.log(item);
})

//o que importa é o que eu passo dentro da call
//vai retornar frutas, apenas

//

function Dom(seletor) {
    this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe) {
    console.log(this);
    this.element.classList.add(classe);
} 

const li = { 
    element: document.querySelector('li')
}

Dom.prototype.ativo.call(li, 'ativar');



//const ul = new Dom('ul');

//ul.ativo.call(li,'ativar'); //eu tenho que por um objeto no call

//console.log(ul);
//ul é um objeto do tipo Dom, que tem dentro dele a propriedade element que criamos (this.element)

//

const minhasFrutas = ['Uva', 'Maçã', 'Banana'];

minhasFrutas.pop();

//

const arrayLike = {
    0: 'Item 1',
    1: 'Item 2',
    2: 'Item 3',
    length: 3,
}*/

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

const filtro = arrayLi.filter((item) => {
    return item.classList.contains('ativo');
});

console.log(filtro);

console.log(li);

//Apply:

const numeros = [33, 232, 33, 434, 54, 5424, 4];
console.log(Math.max.apply(null, numeros));
//aqui o apply funciona, porque trata-se de uma array, mas se usasse o call, não funcionaria

//Bind

//const $ = document.querySelectorAll.bind(document);

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
      return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
  }
  
  const honda = {
    marca: 'Honda',
  };
  const acelerarHonda = carro.acelerar.bind(honda);
  acelerarHonda(200, 10);

 console.log(acelerarHonda(300, 20))
  // Honda acelerou 200 em 10

 
  
  