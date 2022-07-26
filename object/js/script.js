//EXERCÍCIOS:

// Crie uma função que verifique
// corretamente o tipo de dado

//toString

function verificarDado(dado) {
  return Object.prototype.toString.call(dado);
}

console.log(verificarDado({}));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

//criou uma propriedade imutável
//quando ele colocou enumerable: true, ele a tornou imutável?

const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  }
})

console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);
//Se eu tentar adicionar qualquer coisa em configuração lá no console, ele não adiciona.

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))