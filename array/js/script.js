//EXERCÍCIOS

// Retorne um número aleatório
// entre 1050 e 2000

const min = 1050;
const max = 2000;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 30, 9';
const stringToArray = numeros.split(', ');
//passo cada item como se fosse um argumento com os ...
console.log(Math.max(...stringToArray));
 
// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

//primeiro colocar os precos em letra maiuscula

function limparPrecos(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    //agora eu arredondo o preço:
    preco = +preco.toFixed(2)
    return preco;
}   

let soma = 0;

listaPrecos.forEach((preco) => {
    soma += limparPrecos(preco);
});

//se eu quiser colocar essa soma em reais:

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

limparPrecos[3];

//indexOf() localiza o elemento na array
//splice() remove

//limpar preços: 
//arredondar: .ceil()
//soma total: funcao soma