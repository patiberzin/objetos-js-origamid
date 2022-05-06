//Exercícios
//1 - Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

/*const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

  let taxaTotal = 0
  let recebimentoTotal = 0

  transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', '');
    if(item.descricao.slice(0, 4) === 'Taxa') {
        taxaTotal += numeroLimpo;
    } else {
      recebimentoTotal += numeroLimpo;
    }
  })
  console.log(taxaTotal);
  console.log(recebimentoTotal);

  //Primeiro eu falo com cada item
  //pego o item (de cada item), pego os valores e dou um replace, que é para trocar
  //R$ por espaço
  //Depois, SE o item tiver a parte da descrição entre 0 e 4 a palavra Taxa
  //taxaTotal vai se somar ao númeroLimpo.
  //Lembrando que taxaTotal é zero e eu tenho que usar para a soma.
  //E joga no console o resultado de taxaTotal


  
  //2 - Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  const array = transportes.split(';');
  console.log(array);

  
  
//3 - Substitua todos os span's por a's
  let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

  html = html.split('span').join('a');
  console.log(html);

  
  //4 - Retorne o último caracter da frase
  const frase = 'Melhor do ano!';

  console.log(frase.slice(-1));
  //ou:
  //console.log(frase[frase.length - 1]);*/
  
//5 - Retorne o total de taxas


  const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

  let taxaTotal = 0;

 transacoes2.forEach((item) => {
   item = item.toLocaleLowerCase().trim().slice(0,4);
   if(item === 'taxa') {
    taxaTotal++
  }
 });
 console.log(taxaTotal);
