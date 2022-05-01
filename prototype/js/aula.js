function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.abracar = function() {
        return 'abraçou';
    }
    this.andar = function() {
        return 'Andou pelo objeto';
    }
}

Pessoa.prototype.andar = function() { //é um objeto, seguido de um método com uma função
    return this.nome + ' andou';
} 

const pati = new Pessoa('Pati', 33);

//console.log(Pessoa.prototype);
//console.log(pati.prototype); // da undefined, porque pati é objeto e não função

const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);

const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true;
    }
}

