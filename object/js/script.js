/*const pessoa = new Object({
  nome: 'Pati'
})

console.log(pessoa)

const carro = {
  marca: 'Marca',
  rodas: 4,
  init(valor) {
    this.marca = 'valor';
    return this;
  },
  acelerar() {
    return this.marca + ' acelerou';
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(carro).init('Honda');

console.log(honda.acelerar());

const ferrari = Object.create(carro).init('Ferrari');

console.log(ferrari.acelerar());*/

/* Object.Assign() 

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

Object.assign(moto, funcaoAutomovel); /* pode adicionar quantos objetos quiser 
Ele substitui os valores pela cadeia de objetos que for colocando 

console.log(moto);*/

/* defineProperties()  */

const moto = {
  capacete: true,
}


Object.defineProperties(moto, { /* Passa um objeto com as propriedades */
  rodas: {
    enumerable: true,
    get() {
      return 2; //propriedade q estou criando dentro do objeto.
    },
    set(valor) {
      this._rodas = valor * 4;
    }
  }
})


console.log(moto);

const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');

Object.getOwnPropertyNames(Array.prototype);

const frutas = ['Banana'];

console.log(Object.getPrototypeOf(frutas));
console.log(Array.prototype);

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

const novaFruta = frutas1;

novaFruta[0] = 'Uva'; //altera o primeiro valor da array

console.log(frutas1); //retorna uva, pera

console.log(Object.is(frutas1, novaFruta));

const carro = {
  marca: 'Ford',
  ano: 2018,
}

Object.preventExtensions(carro);
carro.portas = 4;
delete carro.marca;

carro.marca = 'Honda'

console.log(carro);
console.log(Object.isSealed(carro));