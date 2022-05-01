//EXERCÍCIOS
// Liste 5 objetos nativos
//Object
//String
//Array
//Number
//Function

// Liste 5 objetos do browser
//Basta colocar Window no console e verificar
//window
//history
//Document
//HTMLCollection
//NodeList


// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

//Podemos verificar usando o typeof
//jogou window no console e
//pegou alguma propriedade do window
//para verificar no if
//se o tipo da propriedade onafterprint for diferente de undefined

if(typeof document.webkitHidden !== "undefined") {
    console.log('Existe');
} else {
    console.log('Não existe');
}