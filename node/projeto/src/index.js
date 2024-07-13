//node/projeto/arquivos/texto-web.txt
//node/projeto/src/index.js

const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]

fs.readFile(link, "utf-8", (erro, texto) => {
    quebraEmParagrafos(texto)
    //verificaPalavrasDuplicadas(texto)
})

// Implementando a LÓGICA DO PROJETO
// 1º Criar um array com as palavras
// Dentro do array precisa ter um contador, que vai checar se a palavra existe e adicionar no contador +1 se ela existir, ou começa a contagem do zero se ainda não tiver nenhuma ocorrência.
// 2º CONTAR AS OCORRÊNCIAS
//3° COMO DISPONIBILIZAR ESSE RESULTADO
// Montar um objeto com as palavras

// Separar o texto em parágrafos
function quebraEmParagrafos(texto) {
    // Esperando um array que invés de um array de palavras, um array de parágrafos
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.map((paragrafo) => {
      return verificaPalavrasDuplicadas(paragrafo)  
    })
    console.log(contagem);
}

function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
    //objeto[propriedade] = valor;
    listaPalavras.forEach(palavra => {
        if(palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra)
        resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) +1
        }
        
    });
    return resultado
}


