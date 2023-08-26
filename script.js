// criar uma função livro com 3 paramentros: nome, ano e autor.
// passsar no corpo da função nome para toUppercase()
// calcular o total de anos desde o lançamento do livro 2023 - ano.
// criar uma variável com a frase: nome + "por" + autor;
// colocar os 3 valores anteriores em um objeto
// retornar o objeto definido
// executar a funcao com os seguintes argumentos:
// "O senhor dos Anéis", "1954", "J. R. R. Tolkien"
// Guardar o retorno da função em uma variável 
// log a frase final da função executada no console 

function livro(nome, ano, autor) {
   return {
    nome: nome.toUpperCase(),
    totalAnos: 2023 - ano,
    frase: nome + " por " + autor
   }
 }
const Retorno = livro("O senhor dos Anéis", 1954 ,"J. R. R. Tolkien");
console.log(Retorno.frase);