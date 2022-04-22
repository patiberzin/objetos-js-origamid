//EXERCÍCIOS

// Transforme o objeto abaixo em uma Constructor Function
//acertei

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function() { //se é método, é uma função
        console.log(this.nome + ' andou');
    }
}
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  //acertei
  //se colocar joao.andar() no Console, sai Joao andou

  const joao = new Pessoa('Joao', 20);
  const maria = new Pessoa('Maria', 25);
  const bruno = new Pessoa('Bruno', 15);
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  
  function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function(classe) {
        elementList.forEach((element)=>{
            element.classList.add(classe);
        });
    }
    this.removeClass = function(classe) {
        elementList.forEach((element)=>{
            element.classList.remove(classe);
        });
    }
  }

  const listaItens = new Dom('li');

  //Colocando isso no console listaItens.addClass('teste') aparecem as classes para os lis

listaItens.addClass('ativar');
  
  


