function Carro(marcaAtribuida, precoAtribuido) {
     this.marca = marcaAtribuida;
     this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 3000); //new cria um novo objeto
const fiat = new Carro('Fiat', 4000);

//this Keyword

function Carro2(marcas, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marcas;
    this.preco = precoFinal; //faz a conta e sai 6000
}

const mazda = new Carro2('Mazda', 5000); 

//Minha explicação no word