//EXERCÍCIOS

// Crie uma função construtora de Pessoas deve conter nome, sobrenome e idade


//console.log(`${pati.nome} ${pati.sobrenome} ${pati.idade}`);


// Crie um método no protótipo que retorne o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoas.prototype.completo = function() {
    console.log(`${this.nome} ${this.sobrenome} ${this.idade}`);
}

const pati = new Pessoas ('Pati', 'Berzin', 33);

//Se eu jogar pati no Console, aparece tudo
//acertei
//Se eu colocar pati.completo()
//Aparece: Pati Berzin 33

// Liste os métodos acessados por dados criados com NodeList, HTMLCollection Document


//Colocar NodeList no Console
//Colocar no Console: NodeList.prototype
/* entries: ƒ entries()
forEach: ƒ forEach()
item: ƒ item()
keys: ƒ keys()
length: (…)
values: ƒ values() */

//Colocar no console: HTMLCollection.prototype
/* item: ƒ item()
length: (…)
namedItem: ƒ namedItem() */

//Poderia fazer assim tbm:
//Object.getOwnPropertyNames(NodeList.prototype)
/* 0: "entries"
1: "keys"
2: "values"
3: "forEach"
4: "length"
5: "item"
6: "constructor" */

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);




// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIELEMENT
li.click; //function
li.innerText; //string
li.value; //number
li.hidden; //boolean
li.offsetLeft; //number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //Como retorna "Boolean" é string

