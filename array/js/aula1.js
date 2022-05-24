const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

//isso não é algo que vamos ver no dia a dia, mas é só para fins didáticos

dados[2]('Ford');
dados[1][2].cor; // azul

const carros = new Array ('Ford', 'Fiat', 'Honda');

carros[2] = 'Ferrari';
carros[3] = 'Kia'; //Ele adiciona Kia ao final

//Se eu criar 3 e depois criar 20, terão espaços vazios o que tornará o acesso a array lento.

console.log(carros);

const obj = {
    0: 'Andre',
    1: 'Rafael',
    2: 'Teste',
    length: 3,
}

const objArray = Array.from(obj);

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

console.log(frutas[2][0].length);
//segundo item da array (a array) e o primeiro item. Ele conta e retorna 8, porque são 8 caracteres em 'Uva Roxa'

console.log(carros.splice(2,0,'Fusca'));
//Explicação no word objetos

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 2));

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].fill('Banana', 1, 2));

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];

const transportes = transporte1.concat(transporte2);
console.log(transportes);

const maisTransportes = ['oi'].concat(transporte1, transporte2, 'Van', 'Patinete');
console.log(maisTransportes);