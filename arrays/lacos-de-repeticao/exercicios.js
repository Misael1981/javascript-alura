/**
 * 1- Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
 */

const elementosArray = [10, 20, 30, 40, 50]

for (let valor of elementosArray) {
    console.log(valor)
}

/**
 * 02- Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
 */

const arrayParaImprimir = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function imprimirArray (arrayParaImprimir) {

    for (let i = 0; i < arrayParaImprimir.length; i++) {
        console.log(i, arrayParaImprimir[i])
    }
}

imprimirArray(arrayParaImprimir)

/**
 * 03- Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
 */

const elementosParaSomar = [5, 10, 15, 20, 25, 30]


function somaDosElementos (elementosParaSomar) {

    let elementosSomados = 0
    for (let i = 0; i < elementosParaSomar.length; i ++) {
        elementosSomados += elementosParaSomar[i]
    }
    console.log(`A soma dos elementos é: ${elementosSomados}`)
}

somaDosElementos(elementosParaSomar)

/**
 * 04- Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
 */

const numerosInteiros = [85, 67, 35, -12, 88, 65]

function menorEMaiorValor (numerosInteiros) {

    let menorValor = 0
    let maiorValor = 0
    for (let i = 0; i < numerosInteiros.length; i++) {

        if (maiorValor < numerosInteiros[i]) {
            maiorValor = numerosInteiros[i]
        }
        if (menorValor > numerosInteiros[i]) {
            menorValor = numerosInteiros[i]
        }
    }

    return `O menor número é ${menorValor} e o maior número é ${maiorValor}`
}

console.log(menorEMaiorValor(numerosInteiros))

/**
 * 05- Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
 */
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 === 0) {

        console.log(numeros[i])       
    }
}

/**
 * 06- Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
 */

const valoresParaMedia = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]
let soma = 0

function calcularMedia (valoresParaMedia) {

    for(let i = 0; i < valoresParaMedia.length; i++) {

        soma += valoresParaMedia[i]
    }
    let media = soma / valoresParaMedia.length
    return `A media dos numeros é: ${media}`
}
console.log(calcularMedia(valoresParaMedia))

