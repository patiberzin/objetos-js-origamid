//EXERCÍCIOS

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável

/*const primeiroValor = comidas.shift();
console.log(primeiroValor);*/

// Remova o último valor de comidas e coloque em uma variável

const ultimoValor = comidas.pop();
console.log(ultimoValor);

const resultado = ultimoValor;

// Adicione 'Arroz' ao final da array

const concatUltimo = comidas.push('Arroz');
console.log(concatUltimo);

// Adicione 'Peixe' e 'Batata' ao início da array

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

const concatInicio = ['Peixe', 'Batata'].concat(estudantes);
console.log(concatInicio);

// Arrume os estudantes em ordem alfabética

const alfabetica = estudantes.sort();
console.log(alfabetica);

// Inverta a ordem dos estudantes

const reverse = estudantes.reverse();
console.log(reverse);

// Verifique se Joana faz parte dos estudantes

//Array.prototype.includes()

//não sei, não consegui

console.log(estudantes.includes('Joana')) //retorna true

// Verifique se Juliana faz parte dos estudantes

console.log(estudantes.includes('Juliana')) //retorna false

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
//usa o let para poder modificar


html = html.split('section').join('ul');
html = html.split('div').join('li');
console.log(html);


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carrosCopia = carros.slice(); //cópia da array original

const remove = carros.pop();
console.log(remove);