/**
 * Procurando em uma lista 

- Crie uma função que receba como argumento o nome de um aluno;
- Verifique se a pessoa faz parte da lista de alunos;
- Retorne a média correspondente na lista de médias;
- Caso o nome não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado;
 */

const alunos = ["João", "Juliana", "Caio", "Ana"]
const medias = [10, 8, 7.5, 9]

const lista = [alunos, medias]

function exibeNomeENota (aluno) {

    // Checando se determinado elemento se encontra na lista
    if(lista[0].includes(aluno)) {
        // Guardando o índice do aluno no array
        const indice = lista[0].indexOf(aluno)
        // Para trazer a média 
        const mediaAluno = lista[1][indice]
        console.log(`${aluno} tem a média ${mediaAluno}`)
    } else {
       console.log(`Estudante não existe na lista`) 
    }
}

exibeNomeENota("Juliana")
exibeNomeENota("Vini")

/**
 * Percorrendo uma lista
 * 
 * Imprima no console cada item de um array, junto com seu índice;
 */

// for Clássico

const notas = [10, 8.5, 5, 6.5, 8, 7.5]

for (let i = 0; i < notas.length; i++) {
    console.log(i, notas[i])
}

// Calculando média com for

const notasAlunos = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

for (let i = 0; i < notasAlunos.length; i++) {

    somaDasNotas += notasAlunos[i]
}

const media = somaDasNotas / notasAlunos.length

console.log(`A média dos alunos e de: ${media}`)

/**
 * for of
 * 
 * Mesmo exercício feito com o for of
 */

for (let notasDosAlunos of notasAlunos) {
    somaDasNotas += notasDosAlunos
}

const mediaComForOf = somaDasNotas / notasAlunos.length

console.log(`A média com for..of continua sendo ${mediaComForOf}`)